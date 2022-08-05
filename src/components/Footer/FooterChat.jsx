import {
  ClockCircleOutlined,
  EllipsisOutlined,
  PictureOutlined,
  SendOutlined,
  SmileOutlined,
  TagsOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Dropdown, Menu, message } from "antd";
import { useSearchParams } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { fetchData } from "../../utils/fetchData";
import "./Footer.css";

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <div className="flex items-center">
            <TagsOutlined
              style={{
                fontSize: 25,
                color: "#14a05b",
                marginRight: 10,
              }}
            />
            <p style={{ margin: 0 }}>Gắn tag chat</p>
          </div>
        ),
      },
      {
        key: "2",
        label: (
          <div className="flex items-center">
            <UserOutlined
              style={{
                fontSize: 25,
                color: "#14a05b",
                marginRight: 10,
              }}
            />
            <p style={{ margin: 0 }}>Đính kèm liên lạc</p>
          </div>
        ),
      },
      {
        key: "3",
        label: (
          <div className="flex items-center">
            <ClockCircleOutlined
              style={{
                fontSize: 25,
                color: "#14a05b",
                marginRight: 10,
              }}
            />
            <p style={{ margin: 0 }}>Hẹn giờ</p>
          </div>
        ),
      },
    ]}
  />
);

const FooterChat = ({ sendMessage }) => {
  let [searchParams] = useSearchParams();
  const [messageText, setMessageText] = useState("");
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef();
  // const [selectedFile, setSelectedFile] = useState();
  // const [preview, setPreview] = useState();

  // create a preview as a side effect, whenever selected file is changed
  // useEffect(() => {
  //   if (!selectedFile) {
  //     setPreview(undefined);
  //     return;
  //   }

  //   const objectUrl = URL.createObjectURL(selectedFile);
  //   setPreview(objectUrl);

  //   // free memory when ever this component is unmounted
  //   return () => URL.revokeObjectURL(objectUrl);
  // }, [selectedFile]);

  const handleMessageTextChange = (e) => {
    setMessageText(e.target.value);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      for (let i = 0; i < files.length; ++i) {
        formData.append("attachment", files[i]);
      }
      formData.append("channel_id", searchParams.get("channel_id"));
      formData.append("msg_type", "text");
      formData.append("text", messageText);

      await fetchData(
        `https://chat.ghtk.vn/api/v3/messages`,
        "post",
        formData,
        {
          "Content-Type": "multipart/form-data",
        }
      );

      sendMessage(true);
      setMessageText("");
    } catch (error) {
      console.log(error);
      message.error("Có lỗi khi gửi tin nhắn");
    }
  };

  const handleFilesChange = (e) => {
    const files = e.target.files;
    setFiles(files);
  };

  return (
    <div className="chat-view-footer">
      <div className="foot-view-expand"></div>
      <div className="footer-view-input">
        <div className="footer-view-more">
          <Dropdown overlay={menu} placement="topLeft" arrow>
            <EllipsisOutlined style={{ fontSize: 25, color: "#14a05b" }} />
          </Dropdown>
        </div>
        <div className="compile-content">
          <div className="compile-content-editer">
            <div className="editor-message">
              <form onSubmit={handleSendMessage}>
                <label>
                  <input
                    multiple
                    value={messageText}
                    onChange={handleMessageTextChange}
                    type="text"
                    className="input-message"
                    placeholder="Nhập nội dung tin nhắn"
                  />
                </label>
              </form>
            </div>
            <div className="menu-footer-icon">
              <div className="footer-icon">
                <input
                  onChange={handleFilesChange}
                  ref={fileInputRef}
                  hidden
                  type="file"
                  name=""
                  multiple
                  className="file-input"
                />
                {
                  <PictureOutlined
                    onClick={() => fileInputRef?.current?.click()}
                    style={{ fontSize: 24, color: "#14a05b" }}
                  />
                }
              </div>
              <div className="footer-icon">
                <SmileOutlined style={{ fontSize: 24, color: "#14a05b" }} />
              </div>
            </div>
          </div>
          <div className="footer-view-rep">
            <SendOutlined
              onClick={handleSendMessage}
              style={{ fontSize: 28, color: "rgb(204,204,204)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterChat;
