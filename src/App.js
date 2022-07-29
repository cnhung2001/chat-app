import {
  BellOutlined,
  DownOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Badge, Layout, Spin } from "antd";
import React, { useEffect, useState } from "react";
import "./App.css";
import Channel from "./components/channel.jsx";
import { fetchData } from "./utils/fetchData";
import ChatView from "./components/ChatView/ChatView";
import FooterChat from "./components/Footer/FooterChat";
import HeaderChat from "./components/Header/HeaderChat";

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
              channels.map((channel) => (
                <div>
                  <Channel
                    name={channel.channel_name}
                    avatar={channel.author.avatar}
                    lastMessage={channel.last_message.text}
                    LMTime="20:20"
                  />
                </div>
              ))}
          </div>
        </div>
      </Sider>
      <Layout>
        <Header>
          <HeaderChat />
        </Header>
        <Content>
          <ChatView />
        </Content>
        <Footer>
          <FooterChat />
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
