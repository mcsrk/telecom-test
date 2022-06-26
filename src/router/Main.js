import { BackTop, Layout } from "antd";
import { Switch, Route, Redirect } from "react-router-dom";

// Components
import Header from "components/header/Header";
import Content from "pages/Content";
import Footer from "components/footer/Footer";

// Utils
import useWindowDimensions from "utils/window";

const Main = () => {
  const { height } = useWindowDimensions();
  return (
    <Layout style={{ minHeight: height }}>
      <BackTop />
      <Header />
      <Switch>
        {/* Set up router for future routes and more content/functionalities */}
        <Route path="/" exact>
          <Content />
        </Route>
        <Redirect to="" />
      </Switch>
      <Footer />
    </Layout>
  );
};

export default Main;
