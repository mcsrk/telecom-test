import { Affix, Input, Row, Col } from "antd";
import { useContext } from "react";

// Utils
import MarvelContext from "context/marvelContext";

const SearchBar = () => {
  const {
    queryType,

    comicSearchTerm,
    setComicSearchTerm,
    characterSearchTerm,
    setCharacterSearchTerm,
  } = useContext(MarvelContext);

  const handleChange = (e) => {
    if (queryType === "characters") {
      setCharacterSearchTerm(e.target.value);
    } else if (queryType === "comics") {
      setComicSearchTerm(e.target.value);
    }
  };

  return (
    <Affix className="w-60 sm:w-96 mb-6 mx-auto" offsetTop={10}>
      <Col>
        <Row>
          <Input
            placeholder={
              queryType === "characters"
                ? "¡Busca un personaje! ej: iron..."
                : "¡Busca un comic! ej: black..."
            }
            size="large"
            onChange={handleChange}
            value={
              queryType === "characters" ? characterSearchTerm : comicSearchTerm
            }
          />
        </Row>
      </Col>
    </Affix>
  );
};

export default SearchBar;
