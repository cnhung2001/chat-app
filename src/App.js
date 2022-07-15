import "./App.css";
import React, { useEffect, useState } from "react";
import { Layout, Badge, Spin } from "antd";
import {
  BellOutlined,
  DownOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { fetchData } from "./utils/fetchData";
=======
import { Layout } from "antd";
import Channel from "./components/channel.jsx";
>>>>>>> bc1f0b1ff1db84d4c2f12f4d17fc70c0e8ec0073
const { Header, Sider, Content, Footer } = Layout;

const App = () => {
  const [channels, setChannels] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        setLoading(true);
        const data = await fetchData("https://chat.ghtk.vn/api/v3/channels");
        setChannels(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchChannels();
  }, []);

  if (loading) return <Spin />;

  return (
    <Layout>
      <Sider width={340}>
        <div className="header-channel-list">
          <div className="header-left">
            <Badge count={5}>
              <MenuOutlined style={{ fontSize: 18 }} />
            </Badge>
            <div className="name-website" title="Chat nội bộ">
              Chat nội bộ
            </div>
          </div>
          <div className="noti-website">
            <BellOutlined style={{ color: "#069255", fontSize: 20 }} />
          </div>
        </div>
        <div className="container-channel-list">
          <div className="search-wrapper">
            <input
              type="text"
              className="input-search"
              placeholder="Tìm kiếm"
            ></input>
            <span className="icon-search">
              <SearchOutlined style={{ fontSize: 16 }} />
            </span>
            <span className="btn-filter">
              Lọc
              <DownOutlined style={{ fontSize: 10, marginLeft: "3px" }} />
            </span>
          </div>

          <div className="list_channel_inter">
            {channels &&
              channels.map((channel) => <p>{channel.channel_name}</p>)}

          <div class="list_channel_inter">
            <div>
              <Channel name="Ban Văn Hóa Truyền Thông" avatar="https://cache.giaohangtietkiem.vn/d/9ccd62da444b43329c80799a0b5e675b.jpg" lastMessage="Cùng lên kế hoạch chuẩn bị cho sức khỏe của cả sống bạn nhé!" LMTime="20:20"/>
              <Channel name="Ban Văn Hóa Truyền Thông" avatar="https://cache.giaohangtietkiem.vn/d/9ccd62da444b43329c80799a0b5e675b.jpg" lastMessage="Cùng lên kế hoạch chuẩn bị cho sức khỏe của cả sống bạn nhé!" LMTime="20:20"/>
              <Channel name="Ban Văn Hóa Truyền Thông" avatar="https://cache.giaohangtietkiem.vn/d/9ccd62da444b43329c80799a0b5e675b.jpg" lastMessage="Cùng lên kế hoạch chuẩn bị cho sức khỏe của cả sống bạn nhé!" LMTime="20:20"/>
              <Channel name="Ban Văn Hóa Truyền Thông" avatar="https://cache.giaohangtietkiem.vn/d/9ccd62da444b43329c80799a0b5e675b.jpg" lastMessage="Cùng lên kế hoạch chuẩn bị cho sức khỏe của cả sống bạn nhé!" LMTime="20:20"/>
              <Channel name="Ban Văn Hóa Truyền Thông" avatar="https://cache.giaohangtietkiem.vn/d/9ccd62da444b43329c80799a0b5e675b.jpg" lastMessage="Cùng lên kế hoạch chuẩn bị cho sức khỏe của cả sống bạn nhé!" LMTime="20:20"/>
              <Channel name="Ban Văn Hóa Truyền Thông" avatar="https://cache.giaohangtietkiem.vn/d/9ccd62da444b43329c80799a0b5e675b.jpg" lastMessage="Cùng lên kế hoạch chuẩn bị cho sức khỏe của cả sống bạn nhé!" LMTime="20:20"/>
              <Channel name="Ban Văn Hóa Truyền Thông" avatar="https://cache.giaohangtietkiem.vn/d/9ccd62da444b43329c80799a0b5e675b.jpg" lastMessage="Cùng lên kế hoạch chuẩn bị cho sức khỏe của cả sống bạn nhé!" LMTime="20:20"/>
              <Channel name="Ban Văn Hóa Truyền Thông" avatar="https://cache.giaohangtietkiem.vn/d/9ccd62da444b43329c80799a0b5e675b.jpg" lastMessage="Cùng lên kế hoạch chuẩn bị cho sức khỏe của cả sống bạn nhé!" LMTime="20:20"/>
              <Channel name="Ban Văn Hóa Truyền Thông" avatar="https://cache.giaohangtietkiem.vn/d/9ccd62da444b43329c80799a0b5e675b.jpg" lastMessage="Cùng lên kế hoạch chuẩn bị cho sức khỏe của cả sống bạn nhé!" LMTime="20:20"/>
              <Channel name="Ban Văn Hóa Truyền Thông" avatar="https://cache.giaohangtietkiem.vn/d/9ccd62da444b43329c80799a0b5e675b.jpg" lastMessage="Cùng lên kế hoạch chuẩn bị cho sức khỏe của cả sống bạn nhé!" LMTime="20:20"/>
              <Channel name="Ban Văn Hóa Truyền Thông" avatar="https://cache.giaohangtietkiem.vn/d/9ccd62da444b43329c80799a0b5e675b.jpg" lastMessage="Cùng lên kế hoạch chuẩn bị cho sức khỏe của cả sống bạn nhé!" LMTime="20:20"/>
              
            </div>

          </div>
        </div>
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
