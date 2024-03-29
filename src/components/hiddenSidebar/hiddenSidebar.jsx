import { Drawer } from "antd";
import { Badge } from "antd";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import "./hiddenSidebar.css";

const HiddenSidebar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Badge count={2} onClick={showDrawer}>
        <MenuOutlined style={{ fontSize: 18 }} />
      </Badge>
      <Drawer
        placement="left"
        closable={false}
        size={"340px"}
        onClose={onClose}
        visible={visible}
        key="left"
      >
        <div className="sidebar_container">
          <div className="user_info">
            <div className="sub_info_user">
              <div className="user_avatar">
                <img
                  src="https://cache.giaohangtietkiem.vn/d/fa55a405d0824a4fbf8d8569bfb38a85.jpg?width=130"
                  alt="avatar"
                />
              </div>
              <div className="user_detail">
                <div className="username">Cao Nguyễn Hùng</div>
                <div className="user_position">Web Engineer</div>
              </div>
            </div>
          </div>
          <div className="sidebar_content">
            <div className="menu_section" tabIndex="1">
              Lịch hẹn
            </div>
            <div className="menu_section" tabIndex="1">
              Mail
            </div>
            <div className="menu_section" tabIndex="1">
              Chat nội bộ
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default HiddenSidebar;
