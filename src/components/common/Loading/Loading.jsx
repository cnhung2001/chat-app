import { Spin } from "antd";
import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <Spin />
    </div>
  );
};

export default Loading;
