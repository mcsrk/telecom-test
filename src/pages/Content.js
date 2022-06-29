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
  const [queryType, setQueryType] = useState("characters");
  const [isCharacters, setIsCharacters] = useState(true);
  const [isComics, setIsComics] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(false);

  const [comicSearchTerm, setComicSearchTerm] = useState(null);
  const [comicTotalCount, setComicTotalCount] = useState("0");
  const [comicPageNumber, setComicPageNumber] = useState(1);
  const [comicLimit, setComicLimit] = useState(20);

  const [characterSearchTerm, setCharacterSearchTerm] = useState(null);
  const [characterTotalCount, setCharacterTotalCount] = useState("0");
  const [characterPageNumber, setCharacterPageNumber] = useState(1);
  const [characterLimit, setCharacterLimit] = useState(18);

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
          queryType,
          isCharacters,
          isComics,
          selectedCharacter,

          setQueryType,
          setSelectedCharacter,
          setIsComics,
          setIsCharacters,

          //Comics
          comicSearchTerm,
          comicTotalCount,
          comicPageNumber,
          comicLimit,

          setComicSearchTerm,
          setComicTotalCount,
          setComicPageNumber,
          setComicLimit,

          //Characters
          characterSearchTerm,
          characterTotalCount,
          characterPageNumber,
          characterLimit,

          setCharacterSearchTerm,
          setCharacterTotalCount,
          setCharacterPageNumber,
          setCharacterLimit,
        }}
      >
        <SearchHero />
        <Col className="w-full p-2 m-auto flex justify-center items-center  ">
          {isComics && <ComicList />}
          {isCharacters && (
            <Row gutter={[16, 0]} className="flex justify-center">
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
        </Col>
      </MarvelContext.Provider>
    </Content>
  );
};

export default ContentPage;
