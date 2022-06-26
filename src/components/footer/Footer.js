import { Col, Divider, Layout, Row } from "antd";

// Assets
import { default as logo } from "assets/img/grayLogo.svg";

// Utils
import {
  mediaInfo,
  companyList,
  communityList,
  helpList,
  contactList,
} from "utils/constans";

// Consts
const { Footer } = Layout;

const renderSocialMediaList = (list) => {
  return (
    <ul className="mt-4 text-4xl">
      {list.map((ele) => {
        return (
          <li className="inline m-2" key={"li-" + ele.link}>
            <a
              key={"a-" + ele.link}
              href={ele.link}
              className="text-muted text-marveltxt-button hover:text-marvelPalette-primary"
              rel="noreferrer"
            >
              {ele.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const renderSectionsList = (list) => {
  return (
    <>
      <h6 className="font-extrabold mb-4" key={list.title}>
        {list.title}
      </h6>
      <ul className="list-unstyled mb-0">
        {list?.children.map((ele) => {
          return (
            <li className="mb-2" key={list.tilte + "li-" + ele.link}>
              <a
                key={"a-" + ele.link}
                href={ele.link ?? "#"}
                className="text-muted text-marveltxt-button hover:text-marveltxt-hover"
                rel="noreferrer"
              >
                {ele?.icon}
                {ele.label ?? "-"}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const renderDescription = () => (
  <p className="text-sm sm:text-base max-w-sm">
    Cada generación necesita un héroe.
  </p>
);

const CustomFooter = () => {
  return (
    <Footer className={"bg-white"}>
      {/*  Footer  */}
      <div className="container">
        <Row className="p-4">
          <img src={logo} alt="Logo Marvel" width={180} />
        </Row>
        <Row className="w-full break-word text-gray-600">
          <Col span={10}>
            <Row>
              <Col xs={24} md={6} lg={15} className="p-3 mb-lg-0">
                {renderDescription()}
              </Col>
            </Row>
          </Col>
          <Col span={14}>
            <Row>
              <Col xs={24} md={6} lg={6} className="p-3 mb-4 mb-lg-0">
                {renderSectionsList(companyList)}
              </Col>
              <Col xs={24} md={6} lg={6} className="p-3 mb-4 mb-lg-0">
                {renderSectionsList(communityList)}
              </Col>
              <Col xs={24} md={6} lg={6} className="p-3 mb-lg-0">
                {renderSectionsList(helpList)}
              </Col>
              <Col xs={24} md={6} lg={6} className="p-3 mb-lg-0">
                {renderSectionsList(contactList)}
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <Divider />
      {/*   Addreess and Social-media  */}
      <div className="bg-light py-4">
        <div className="container text-center">
          <Row className="justify-between">
            <Col>
              <p className="text-xs py-2">Hecho por Jhon Acosta</p>
            </Col>
            <Col>{renderSocialMediaList(mediaInfo)}</Col>
          </Row>
        </div>
      </div>
    </Footer>
  );
};

export default CustomFooter;
