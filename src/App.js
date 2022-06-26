import React from "react";
import { Layout, ConfigProvider } from "antd";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import es_ES from "antd/es/locale/es_ES";

// Utils
import useWindowDimensions from "utils/window";
import Main from "router/Main";

const App = () => {
  const { height } = useWindowDimensions();
  return (
    <Router>
      <Redirect to="/" />
      <ConfigProvider locale={es_ES}>
        <Layout style={{ minHeight: height }}>
          <Main />
        </Layout>
      </ConfigProvider>
    </Router>
  );
};

export default App;
