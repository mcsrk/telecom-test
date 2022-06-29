import { getRequest } from "axiosClient";
import marvelContext from "context/marvelContext";
import { useContext, useEffect, useState } from "react";
import { useDebouncedEffect } from "utils/utils";

export default function useComicSearch(queryRoute) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [comics, setComics] = useState([]);

  const [hasMore, setHasMore] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const {
    selectedCharacter,
    comicSearchTerm,
    comicLimit,
    comicPageNumber,
    setComicPageNumber,
    isComics,
  } = useContext(marvelContext);

  const getData = async () => {
    setLoading(true);
    setError(false);

    const reqBody = {
      params: {
        ...(isComics && {
          titleStartsWith: comicSearchTerm !== "" ? comicSearchTerm : null,
        }),
        offset: comicLimit * (comicPageNumber - 1),
        limit: comicLimit,
      },
    };

    try {
      const searchRes = await getRequest(queryRoute, reqBody);
      console.log({ queryRoute, searchRes });
      try {
        setComics((prevData) => {
          return [...new Set([...prevData, ...searchRes.data.data.results])];
        });
      } catch (error) {
        setComics([]);
      }
      setHasMore(searchRes.data.data.count > 0);
      setNoResults(searchRes.data.data.count === 0);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    setComics([]);
    setComicPageNumber(1);
    console.log("limpiando lista de comics");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comicSearchTerm, selectedCharacter]);

  useDebouncedEffect(
    getData,
    [comicSearchTerm, queryRoute, comicPageNumber],
    250
  );

  return { loading, error, comics, hasMore, noResults };
}
