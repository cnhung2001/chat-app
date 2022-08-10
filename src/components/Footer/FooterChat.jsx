import {
  ClockCircleOutlined,
  EllipsisOutlined,
  PictureOutlined,
  SendOutlined,
  SmileOutlined,
  TagsOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Dropdown, Menu, Modal, Upload } from "antd";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchData } from "../../utils/fetchData";

import { getBase64 } from "../../utils/getBase64";

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
  const [sendIconColor, setSendIconColor] = useState("rgb(204,204,204)");

  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);

  const handleMessageTextChange = (e) => {
    if (e.target.value !== "") {
      setSendIconColor("#14a05b");
    } else {
      setSendIconColor("rgb(204,204,204)");
    }
    setMessageText(e.target.value);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      fileList.forEach((file) => {
        formData.append("attachment", file.originFileObj);
      });
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
      if (fileList.length) {
        setFileList([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  return (
    <div className="chat-view-footer">
      <Upload
        multiple
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        beforeUpload={() => {
          return false;
        }}
      >
        <PictureOutlined
          className="send-icon"
          style={{ fontSize: 24, color: "#14a05b" }}
        />
      </Upload>
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="preview"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
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
              <div className="footer-icon"></div>
              <div className="footer-icon">
                <SmileOutlined style={{ fontSize: 24, color: "#14a05b" }} />
              </div>
            </div>
          </div>
          <div className="footer-view-rep">
            <SendOutlined
              onClick={handleSendMessage}
              style={{
                fontSize: 28,
                color: fileList.length ? "#14a05b" : sendIconColor,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterChat;
