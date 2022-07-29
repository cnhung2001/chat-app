import axios from "axios";

export const fetchData = async (url) => {
  const config = {
    headers: {
      Authorization:
        "Bearer c_aqxzjwybotsdbxd3ncxgs8oihwxv84bwon6oizw2dbpcpzw7ppxvgoillbj6ezqn",
    },
  };

  const { data } = await axios.get(url, config);
  return data?.data;
};
