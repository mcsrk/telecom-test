import { Row, Col, Tooltip, Badge, Button } from "antd";

// Utils
import { getThumbnail, renderCreators } from "utils/utils";

// Components
import GenericCard from "./GenericCard";

const renderAlbumAvatar = (cover) => (
  <Tooltip color={"#FF452B"}>
    <div
      onClick={() => window.open(cover, "_blank").focus()}
      className="w-24 rounded-md border-2 border-solid border-transparent hover:border-marvelPalette-primary cursor-pointer select-none"
    >
      <img
        className="object-cover w-full   rounded-md"
        alt="single-cover"
        src={cover}
      />
    </div>
  </Tooltip>
);

const renderTrackName = (name, link) => (
  <div
    className="w-full text-xl text-left overflow-hidden whitespace-nowrap overflow-ellipsis font-bold text-black hover:underline cursor-pointer hover:text-marveltxt-hover"
    onClick={() => window.location.replace(link)}
  >
    {name}
  </div>
);

const renderPrices = (comicInfo) => (
  <>
    <Tooltip placement="right" title={"Copia física"}>
      <Badge
        // color={"white"}
        offset={[-20, -3]}
        style={comicInfo?.prices[0].price === 0 ? {} : { display: "none" }}
        count={"Free"}
      >
        <Button type="primary" className="font-bold">
          {comicInfo?.prices[0].price} USD
        </Button>
      </Badge>
    </Tooltip>
    {comicInfo?.prices.length === 2 && (
      <Tooltip placement="top" title={"Copia digital"}>
        <Button type="secondary">{comicInfo?.prices[1].price} USD</Button>
      </Tooltip>
    )}
  </>
);
const ComicCard = ({ comicInfo }) => {
  const image = getThumbnail(comicInfo);
  const id = comicInfo?.id;
  const name = comicInfo?.title;
  const comicLink = comicInfo?.uri;

  return (
    <GenericCard id={"comic-" + id}>
      {/* thumbnail */}
      <Col span={7}>{renderAlbumAvatar(image)}</Col>
      {/* title & artists */}
      <Col span={17} className=" text-marveltxt-button">
        <Row>{renderTrackName(name, comicLink)}</Row>
        <Row>{renderCreators(comicInfo?.creators?.items)}</Row>
        {/* price */}
        <Row className="flex ">{renderPrices(comicInfo)}</Row>
      </Col>
    </GenericCard>
  );
};

export default ComicCard;
