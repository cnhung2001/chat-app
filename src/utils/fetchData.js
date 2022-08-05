import axios from "axios";

export const fetchData = async (url) => {
  const config = {
    headers: {
      Authorization:
        "Bearer c_7rb24s1fkedxrdtwps30wsfcv7j37g4sqpejfam9zmiigy5zaddznix6ikiypgsb",
    },
  };

  const { data } = await axios.get(url, config);
  return data?.data;
};
