import { Col, Row } from "antd";
import { useContext } from "react";

// Context
import marvelContext from "context/marvelContext";

// Utils
import { getThumbnail } from "utils/utils";

// Components
import GenericCard from "./GenericCard";

const renderCharacterImage = (image) => (
  <div className="mx-auto w-32 rounded-lg shadow-sm border-2 border-solid border-transparent hover:border-marvelPalette-primary hover:shadow-lg select-none">
    <img
      className="object-cover w-full h-32 rounded-lg"
      alt="artist-avatar"
      src={
        image ??
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
      }
    />
  </div>
);

const renderCharacterName = (name, link) => (
  <div className="text-center mx-auto overflow-hidden whitespace-nowrap overflow-ellipsis font-bold text-black ">
    {name}
  </div>
);

const renderComicsAppear = (number) => (
  <div className="text-center text-xs w-full overflow-hidden whitespace-nowrap overflow-ellipsis">
    Aparece en <span className="text-marvelPalette-primary">{number} </span>
    comic{number !== 1 && "s"}
  </div>
);

const CharacterCard = ({ character }) => {
  const id = character?.id;
  const name = character?.name;
  const uri = character?.urls[1].url;
  const avatar = getThumbnail(character);
  const comicsAppear = character?.comics.available;

  const { setSelectedCharacter } = useContext(marvelContext);

  const handleSelect = () => {
    setSelectedCharacter(character);
  };

  return (
    <GenericCard id={"personaje-" + id}>
      <Col className="py-2 cursor-pointer" onClick={handleSelect}>
        <Row>{renderCharacterImage(avatar)}</Row>
        <Row>{renderCharacterName(name, uri)}</Row>
        <Row>{renderComicsAppear(comicsAppear)}</Row>
      </Col>
    </GenericCard>
  );
};

export default CharacterCard;
