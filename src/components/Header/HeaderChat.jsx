import { EllipsisOutlined } from "@ant-design/icons";
import React from "react";
import "./header.css";

const HeaderChat = (props) => {
  const { avatar, name } = props;

  return (
    <div className="chat-view-header">
      <div className="header-left">
        <span className="header-channel-name">Hà Văn Đạt</span>
        <div className="header-channel-active">
          <div className="header-channel-active-member">Web Engineer</div>
        </div>
      </div>
      <div className="header-right">
        <EllipsisOutlined style={{ fontSize: 26 }} />
      </div>
    </div>
  );
};

export default HeaderChat;
