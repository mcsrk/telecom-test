import React from "react";
import { Button, Form, Input, Row, Col } from "antd";

// Assets
import moebiusLogo from "assets/img/marvel_logo.svg";

const Login = ({ email, password, setEmail, setPassword, onPressLogin }) => {
  return (
    <div className="h-full bg-gray-700">
      <div
        className={
          "w-full max-w-xs m-auto mt-20 mb-24 flex flex-col items-center bg-white p-5 shadow-md rounded"
        }
      >
        <div>
          <img
            className="w-52 mx-auto mb-2"
            src={moebiusLogo}
            alt="moebius logo"
          />
        </div>
        <Form
          className={"w-full mt-1"}
          layout="vertical"
          name="basic"
          onFinish={onPressLogin}
          autoComplete="off"
        >
          <Form.Item
            className={"w-full outline-none "}
            label="Correo"
            name="email"
            rules={[
              {
                required: true,
                message: "Ingrese su correo",
              },
            ]}
          >
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>

          <Form.Item
            className={"w-full mb-6 outline-none p-0"}
            label="Contraseña"
            name="password"
            rules={[
              {
                required: true,
                message: "Ingrese su contraseña",
              },
            ]}
          >
            <Input.Password
              className={"m-0"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={"w-full rounded text-xs h-8"}
            >
              INGRESAR
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div
        className={"bg-gray-800 w-full mt-auto flex flex-col items-center py-1"}
      >
        <a href="https://d4d.com.co/" type="link" className={"m-auto"}>
          <Row className={"font-light text-gray-200"}>
            <Col className={"flex justify-center items-center "}>
              Hecho por Jhon Acosta
            </Col>
          </Row>
        </a>
      </div>
    </div>
  );
};

export default Login;
