import { Col, Row } from "antd";
import { getThumbnail } from "utils/utils";

// Components
import GenericCard from "./GenericCard";

const renderArtistAvatar = (cover) => (
  <div className="mx-auto w-32 rounded-lg shadow-sm border-2 border-solid border-transparent hover:border-marvelPalette-primary hover:shadow-lg cursor-pointer select-none">
    <img
      className="object-cover w-full h-32 rounded-lg"
      alt="artist-avatar"
      src={
        cover ??
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
      }
      onClick={() => window.open(cover, "_blank").focus()}
    />
  </div>
);

const renderArtistName = (name, link) => (
  <div
    className="text-center mx-auto overflow-hidden whitespace-nowrap overflow-ellipsis font-bold text-black hover:underline cursor-pointer hover:text-marveltxt-hover"
    onClick={() => window.open(link, "_blank").focus()}
  >
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

  return (
    <GenericCard id={"personaje-" + id}>
      <Col className="py-2">
        <Row>{renderArtistAvatar(avatar)}</Row>
        <Row>{renderArtistName(name, uri)}</Row>
        <Row>{renderComicsAppear(comicsAppear)}</Row>
      </Col>
    </GenericCard>
  );
};

export default CharacterCard;
