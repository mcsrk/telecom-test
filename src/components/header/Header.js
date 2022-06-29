import { Col, Layout } from "antd";
import { withRouter } from "react-router";

//Assets
import { default as logoHeader } from "assets/img/marvel_logo.svg";

// Consts
const { Header } = Layout;

const CustomHeader = () => {
  return (
    <Header className="w-full flex justify-between items-center bg-white shadow-lg z-10">
      <div className={"m-0 flex flex-row items-center"}>
        <Col>
          <img
            width="90px"
            className="sm:text-center"
            src={logoHeader}
            alt="logo"
          />
        </Col>
        <Col>
          <button
            // value={searchTerm}
            className={`mx-auto py-2 px-4 mt-2 cursor-pointer rounded-3xl shadow-xl text-center text-white bg-marvelPalette-primary hover:bg-marveltxt-hover`}
          >
            Login
          </button>
        </Col>
      </div>
    </Header>
  );
};

export default withRouter(CustomHeader);
