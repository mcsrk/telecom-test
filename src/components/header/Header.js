import { Row, Col, Layout } from "antd";
import { withRouter } from "react-router";

//Assets
import { default as logoHeader } from "assets/img/marvel_logo.svg";

// Consts
const { Header } = Layout;

const CustomHeader = ({ user, setLogin, login }) => {
  return (
    <Header className="w-full flex justify-between bg-white shadow-lg z-10 ">
      <Col className="items-center flex">
        <img
          width="90px"
          className="sm:text-center"
          src={logoHeader}
          alt="logo"
        />
      </Col>
      {login && (
        <Row>
          <Col className="mr-4">
            <div className="text-white font-bold">
              {user.name} {user.surname}
            </div>
          </Col>
          <Col>
            <button
              className={`mx-auto py-0 px-4 cursor-pointer shadow-xl text-center text-white bg-marvelPalette-primary hover:bg-marveltxt-hover`}
              onClick={() => setLogin(false)}
            >
              Logout
            </button>
          </Col>
        </Row>
      )}
    </Header>
  );
};

export default withRouter(CustomHeader);
