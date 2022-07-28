import axios from "axios";

export const fetchData = async (url) => {
  const config = {
    headers: {
      Authorization:
        "Bearer c_0aceunq3hucyqx6pch7yu0wfxbnyzoobdbwalqteadi9fffc4w6vpuclntlidkv3",
    },
  };

  const { data } = await axios.get(url, config);
  return data?.data;
};
