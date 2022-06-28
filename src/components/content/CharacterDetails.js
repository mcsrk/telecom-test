import React, { useContext } from "react";
import { Col, Divider, Row, Typography } from "antd";

// Components
import ComicList from "./ComicList";

// Context
import marvelContext from "context/marvelContext";

// Utils
import { getThumbnail } from "utils/utils";

// Consts
const { Text } = Typography;

const renderCharacterImage = (image) => (
  <div className="mx-auto w-32 rounded-lg shadow-sm border-2 border-solid border-transparent hover:border-marvelPalette-primary hover:shadow-lg cursor-pointer select-none">
    <img
      className="object-cover w-full h-32 rounded-lg"
      alt="artist-avatar"
      src={
        image ??
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
      }
      onClick={() => window.open(image, "_blank").focus()}
    />
  </div>
);
const comicsListTitle = () => (
  <Divider>
    <Text
      strong={true}
      className="text-center text-lg sm:text-xl mx-auto mb-2 text-trueGray-dark"
    >
      Comics en los que aparece
    </Text>
  </Divider>
);
const characterName = (name) => (
  <Row className="text-center">
    <Text
      strong={true}
      className="text-lg sm:text-xl mx-auto mb-2 text-marveltxt-hover"
    >
      {name}
    </Text>
  </Row>
);
const renderComicsAppear = (number) => (
  <div className="text-left text-xs w-full overflow-hidden whitespace-nowrap overflow-ellipsis">
    Aparece en <span className="text-marvelPalette-primary">{number} </span>
    comic{number !== 1 && "s"}
  </div>
);

const renderDescription = (selectedCharacter) => (
  <>
    {selectedCharacter?.description ? (
      <div className="text-left text-sm w-full">
        {selectedCharacter?.description}
      </div>
    ) : (
      <div className="text-center italic text-xs w-full text-gray-500">
        Sin descripción
      </div>
    )}
  </>
);

const CharacterDetails = () => {
  const { selectedCharacter } = useContext(marvelContext);
  console.log(selectedCharacter);
  const name = selectedCharacter?.name;
  const avatar = getThumbnail(selectedCharacter);
  const comicsAppear = selectedCharacter?.comics?.available;

  return (
    <Row gutter={[16, 16]} className="w-full bg-white rounded-lg p-4">
      <Col xs={24} md={9}>
        <Row>{renderCharacterImage(avatar)}</Row>
        <Row className="mt-4">{characterName(name)}</Row>
        <Row>{renderComicsAppear(comicsAppear)}</Row>
        <Row className="mt-2 text-sm">
          {renderDescription(selectedCharacter)}
        </Row>
      </Col>
      <Col xs={24} md={15}>
        <Row>{comicsListTitle()}</Row>
        <Row className="text-center">
          <ComicList height={400} />
        </Row>
      </Col>
    </Row>
  );
};

export default CharacterDetails;
