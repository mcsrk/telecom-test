import { useState } from "react";
import { Layout } from "antd";

// Components
import CharacterList from "components/content/CharacterList";
import SearchHero from "components/content/search/SearchHero";
import ComicList from "components/content/ComicList";

// Context
import MarvelContext from "context/marvelContext";

// Consts
const { Content } = Layout;

const ContentPage = () => {
  const [searchTerm, setSearchTerm] = useState(null);
  const [queryType, setQueryType] = useState("characters");
  const [totalCount, setTotalCount] = useState("0");
  const [pageNumber, setPageNumber] = useState(1);
  const [limit, setLimit] = useState(20);

  const [isCharacters, setIsCharacters] = useState(true);
  const [isComics, setIsComics] = useState(false);

  return (
    <Content className="w-full pb-14">
      <MarvelContext.Provider
        value={{
          searchTerm,
          queryType,
          totalCount,
          pageNumber,
          limit,
          isCharacters,
          isComics,

          setSearchTerm,
          setQueryType,
          setTotalCount,
          setPageNumber,
          setLimit,
          setIsComics,
          setIsCharacters,
        }}
      >
        <SearchHero />
        <div className="w-full pt-4 m-auto flex justify-center items-center">
          {isComics && <ComicList />}
          {isCharacters && <CharacterList />}
        </div>
      </MarvelContext.Provider>
    </Content>
  );
};

export default ContentPage;
