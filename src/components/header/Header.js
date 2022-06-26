import { Layout } from "antd";
import { withRouter } from "react-router";

//Assets
import { default as logoHeader } from "assets/img/marvel_logo.svg";

// Consts
const { Header } = Layout;

const CustomHeader = () => {
  return (
    <Header className="w-full flex justify-between items-center bg-white shadow-lg z-10">
      <div className={"m-0 flex flex-row items-center"}>
        <div>
          <img
            width="90px"
            className="sm:text-center"
            src={logoHeader}
            alt="logo"
          />
        </div>
      </div>
    </Header>
  );
};

export default withRouter(CustomHeader);
