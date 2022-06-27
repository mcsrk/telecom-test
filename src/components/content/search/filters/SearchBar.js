import { Affix, Input, Row, Col } from "antd";
import { useContext } from "react";

// Utils
import MarvelContext from "context/marvelContext";

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useContext(MarvelContext);
  return (
    <Affix className="w-60 sm:w-96 mb-6 mx-auto" offsetTop={10}>
      <Col>
        <Row>
          <Input
            placeholder="¡Busca algo! ej: iron..."
            size="large"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </Row>
      </Col>
    </Affix>
  );
};

export default SearchBar;
