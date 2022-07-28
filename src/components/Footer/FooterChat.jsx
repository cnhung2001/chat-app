import {
  ClockCircleOutlined,
  EllipsisOutlined,
  PictureOutlined,
  SendOutlined,
  SmileOutlined,
  TagsOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import React from "react";
import "./footer.css";

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <div className="label-1">
            <TagsOutlined
              style={{ fontSize: 25, color: "#14a05b", paddingRight: 10 }}
            />
            Gắn tag chat
          </div>
        ),
      },
      {
        key: "2",
        label: (
          <div>
            {" "}
            <UserOutlined
              style={{ fontSize: 25, color: "#14a05b", paddingRight: 10 }}
            />
            Đính kèm liên lạc
          </div>
        ),
      },
      {
        key: "3",
        label: (
          <div>
            <ClockCircleOutlined
              style={{ fontSize: 25, color: "#14a05b", paddingRight: 10 }}
            />
            Hẹn giờ
          </div>
        ),
      },
    ]}
  />
);
const FooterChat = () => {
  return (
    <div className="chat-view-footer">
      <div className="footer-view-input">
        <div className="footer-view-more">
          <Dropdown overlay={menu} placement="topLeft" arrow>
            <EllipsisOutlined style={{ fontSize: 25, color: "#14a05b" }} />
          </Dropdown>
        </div>
        <div className="compile-content">
          <div className="compile-content-editer">
            <div className="editor-message">
              <input
                type="text"
                className="input-message"
                placeholder="Nhập nội dung tin nhắn"
              ></input>
            </div>
            <div className="menu-footer-icon">
              <div className="footer-icon">
                <PictureOutlined style={{ fontSize: 24, color: "#14a05b" }} />
              </div>
              <div className="footer-icon">
                <SmileOutlined style={{ fontSize: 24, color: "#14a05b" }} />
              </div>
            </div>
          </div>
          <div className="footer-view-rep">
            <SendOutlined style={{ fontSize: 28, color: "#14a05b" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterChat;
