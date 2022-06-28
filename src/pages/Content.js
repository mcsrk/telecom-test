import { useEffect, useState } from "react";
import { Col, Layout, Row } from "antd";

// Components
import CharacterList from "components/content/CharacterList";
import SearchHero from "components/content/search/SearchHero";
import ComicList from "components/content/ComicList";

// Context
import MarvelContext from "context/marvelContext";
import CharacterDetails from "components/content/CharacterDetails";

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

  const [selectedCharacter, setSelectedCharacter] = useState(true);
  const [tableSpam, setTableSpam] = useState(24);

  useEffect(() => {
    if (selectedCharacter) {
      setTableSpam(10);
    } else {
      setTableSpam(24);
    }
  }, [selectedCharacter]);

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
          selectedCharacter,

          setSelectedCharacter,
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
          {isCharacters && (
            <Row style={{ width: "90%" }} gutter={[16, 0]}>
              <Col span={tableSpam} className="mx-auto">
                <CharacterList />
              </Col>

              {selectedCharacter && (
                <Col xs={24} lg={14}>
                  <CharacterDetails />
                </Col>
              )}
            </Row>
          )}
        </div>
      </MarvelContext.Provider>
    </Content>
  );
};

export default ContentPage;
