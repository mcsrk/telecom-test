import { useState } from "react";
import { Layout } from "antd";

// Components
import CharacterList from "components/content/CharacterList";
import SearchHero from "components/content/search/SearchHero";

// Utils
import MarvelContext from "context/marvelContext";
import { getRequest } from "axiosClient";
import { useDebouncedEffect } from "utils/utils";

// Consts
const { Content } = Layout;

const ContentPage = () => {
  const [loading, setLoading] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [queryType, setQueryType] = useState("characters");
  const [totalCount, setTotalCount] = useState("0");
  const [offset, setOffset] = useState("0");
  const [limit, setLimit] = useState("0");

  const [characters, setCharacters] = useState([]);

  const isCharacters = queryType === "characters";

  // Generic fetching function for different API query types
  const fetchSearchData = async () => {
    const data = {
      params: {
        ...(isCharacters && {
          nameStartsWith: searchTerm !== "" ? searchTerm : "rock",
        }),

        offset: offset,
        limit: limit,
      },
    };
    // Define a setter object based on
    // - possible client query types
    const setters = {
      characters: setCharacters,
    };
    setLoading(true);
    try {
      const searchRes = await getRequest(queryType, data);

      setters[queryType](searchRes.data.data.results);
      setTotalCount(searchRes.data.data.total);
    } catch (error) {
      console.error(error);
      setters[queryType]([]);
      setTotalCount(0);
    }
    setLoading(false);
  };

  useDebouncedEffect(
    fetchSearchData,
    [searchTerm, queryType, offset, limit],
    250
  );

  return (
    <Content className="w-full pb-14">
      <MarvelContext.Provider
        value={{
          searchTerm,
          queryType,
          totalCount,
          offset,
          limit,

          setSearchTerm,
          setQueryType,
          setTotalCount,
          setOffset,
          setLimit,

          onSearch: fetchSearchData,
        }}
      >
        <SearchHero />
        <div className="w-full pt-4 m-auto flex justify-center items-center">
          {isCharacters && (
            <CharacterList loading={loading} characters={characters} />
          )}
        </div>
      </MarvelContext.Provider>
    </Content>
  );
};

export default ContentPage;
