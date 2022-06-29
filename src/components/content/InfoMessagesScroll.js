import React from "react";
import { Alert, Divider, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const InfoMessagesScroll = ({ loading, error, noResults, hasMore }) => {
  return (
    <div>
      {loading && (
        <div className="text-center h-10 leading-8">
          <Spin indicator={<LoadingOutlined style={{ fontSize: 36 }} spin />} />
        </div>
      )}
      {error && (
        <Alert
          message={"Ops, algo salió mal. Intentalo más tarde."}
          type="error"
        />
      )}
      {noResults && (
        <div className="text-center h-10">
          <Divider plain> Esto es todo 🤐</Divider>
        </div>
      )}
      {!hasMore && !noResults && !loading && (
        <div className="text-center h-10">
          <Divider plain> Esto es todo 🤐</Divider>
        </div>
      )}
    </div>
  );
};

export default InfoMessagesScroll;
