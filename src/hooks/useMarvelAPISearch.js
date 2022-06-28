import { getRequest } from "axiosClient";
import marvelContext from "context/marvelContext";
import { useContext, useEffect, useState } from "react";
import { useDebouncedEffect } from "utils/utils";

export default function useCharacterSearch(queryType) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [characters, setCharacters] = useState([]);
  const [comics, setComics] = useState([]);

  const [hasMore, setHasMore] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const {
    searchTerm,
    limit,
    pageNumber,
    setPageNumber,
    isComics,
    isCharacters,
  } = useContext(marvelContext);

  const getData = async () => {
    setLoading(true);
    setError(false);

    const reqBody = {
      params: {
        ...(isCharacters && {
          nameStartsWith: searchTerm !== "" ? searchTerm : null,
        }),
        ...(isComics && {
          titleStartsWith: searchTerm !== "" ? searchTerm : null,
        }),
        offset: limit * (pageNumber - 1),
        limit,
      },
    };

    // Define a setter object based on
    // - possible client query types
    const setters = {
      comics: setComics,
      characters: setCharacters,
    };

    try {
      const searchRes = await getRequest(queryType, reqBody);
      try {
        setters[queryType]((prevData) => {
          return [...new Set([...prevData, ...searchRes.data.data.results])];
        });
      } catch (error) {
        setters[queryType]([]);
      }
      setHasMore(searchRes.data.data.count > 0);
      setNoResults(searchRes.data.data.count === 0);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    setCharacters([]);
    setComics([]);
    setPageNumber(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  useDebouncedEffect(getData, [searchTerm, queryType, pageNumber], 250);

  return { loading, error, characters, comics, hasMore, noResults };
}
