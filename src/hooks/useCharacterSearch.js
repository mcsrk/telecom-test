import { getRequest } from "axiosClient";
import marvelContext from "context/marvelContext";
import { useContext, useEffect, useState } from "react";
import { useDebouncedEffect } from "utils/utils";

export default function useCharacterSearch(queryRoute) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [characters, setCharacters] = useState([]);

  const [hasMore, setHasMore] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const {
    characterSearchTerm,
    characterLimit,
    characterPageNumber,
    setCharacterPageNumber,
    isCharacters,
  } = useContext(marvelContext);

  const getData = async () => {
    setLoading(true);
    setError(false);

    const reqBody = {
      params: {
        ...(isCharacters && {
          nameStartsWith:
            characterSearchTerm !== "" ? characterSearchTerm : null,
        }),

        offset: characterLimit * (characterPageNumber - 1),
        limit: characterLimit,
      },
    };

    // Define a setter object based on
    // - possible client query types

    try {
      const searchRes = await getRequest(queryRoute, reqBody);
      console.log({ queryRoute, searchRes });
      try {
        setCharacters((prevData) => {
          return [...new Set([...prevData, ...searchRes.data.data.results])];
        });
      } catch (error) {
        setCharacters([]);
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
    setCharacterPageNumber(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characterSearchTerm]);

  useDebouncedEffect(
    getData,
    [characterSearchTerm, queryRoute, characterPageNumber],
    250
  );

  return { loading, error, characters, hasMore, noResults };
}
