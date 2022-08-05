import { EllipsisOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchData } from "../../utils/fetchData";
import "./header.css";

const HeaderChat = ({ defaultChannel }) => {
  let [searchParams] = useSearchParams();
  const [channel, setChannel] = useState(defaultChannel);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchChannel = async () => {
      try {
        setLoading(true);
        const data = await fetchData(
          `https://chat.ghtk.vn/api/v3/channels/info?channel_id=${searchParams.get(
            "channel_id"
          )}&limit=50`
        );
        setChannel(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchChannel();
  }, [searchParams]);

  return (
    <div className="chat-view-header">
      <div className="header-left">
        <span className="header-channel-name">{channel?.channel_name}</span>
        <div className="header-channel-active">
          <div className="header-channel-active-member">
            {channel?.channel_type === "direct"
              ? channel?.partner?.position_name
              : `${channel?.count_member} Thành viên`}
          </div>
        </div>
      </div>
      <div className="header-right">

      </div>
    </div>
  );
};

export default HeaderChat;
