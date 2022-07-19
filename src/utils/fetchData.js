import axios from "axios";

export const fetchData = async (url) => {
  const config = {
    headers: {
      Authorization:
        "Bearer c_jnvepdytl7w4m6qt8jwawfom1hfu2tyan0wathl2pmznjg9cvxfza7ue3fdzkxbz",
    },
  };

  const { data } = await axios.get(url, config);
  return data?.data;
};
