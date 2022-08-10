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

<<<<<<< HEAD
    return (
        <>
            <Badge count={2} onClick={showDrawer}>
                <MenuOutlined style={{ fontSize: 18 }} />
            </Badge>
            <Drawer
                placement='left'
                closable={false}
                size={'340px'}
                onClose={onClose}
                visible={visible}
                key='left'
            >
                <div className="sidebar_container">
                    <div className="user_info">
                        <div className="sub_info_user">
                            <div className="user_avatar">
                                <img src="https://cache.giaohangtietkiem.vn/d/42082579352044ab8d822ccff09e04c3.jpg?width=130" alt="avatar"/>
                            </div>
                            <div className="user_detail">
                                <div className="username">Phạm Quý Dương</div>
                                <div className="user_position">Web Engineer</div>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar_content">
                        <div className="menu_section" tabIndex="1">Lịch hẹn</div>
                        <div className="menu_section" tabIndex="1">Mail</div>
                        <div className="menu_section" tabIndex="1">Chat nội bộ</div>
                    </div>
                </div>
            </Drawer>
        </>
    )
}
=======
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
              <div className="user_avatar"></div>
              <div className="user_detail">
                <div className="username">Phạm Quý Dương</div>
                <div className="user_position">Web Engineer</div>
              </div>
            </div>
          </div>
          <div className="sidebar_content">
            <div className="menu_section">Lịch hẹn</div>
            <div className="menu_section">Mail</div>
            <div className="menu_section">Chat nội bộ</div>
          </div>
        </div>
      </Drawer>
    </>
  );
};
>>>>>>> Hung

export default HiddenSidebar;
