import { BackTop, Layout, notification } from "antd";
import { Switch, Route, Redirect } from "react-router-dom";

// Components
import Header from "components/header/Header";
import Content from "pages/Content";
import Footer from "components/footer/Footer";

// Utils
import useWindowDimensions from "utils/window";
import Login from "components/login/Login";
import { useState } from "react";

const Main = () => {
  const { height } = useWindowDimensions();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const user = {
    name: "Juan",
    surname: "Smith",
  };
  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "No autorizado",
      description: "Correo o contraseña incorrectos",
    });
  };

  const onPressLogin = () => {
    if (email.includes("@telecom") && password.includes("123")) {
      setLogin(true);
    } else {
      setLogin(false);
      openNotificationWithIcon("error");
    }
  };

  return (
    <Layout style={{ minHeight: height }}>
      <BackTop />
      <Header email={email} user={user} setLogin={setLogin} login={login} />

      {login ? (
        <Switch>
          <Route path="/" exact>
            <Content />
          </Route>
          <Redirect to="" />
        </Switch>
      ) : (
        <Login
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          onPressLogin={onPressLogin}
        />
      )}

      <Footer />
    </Layout>
  );
};

export default Main;
