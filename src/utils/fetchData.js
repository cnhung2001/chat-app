import axios from "axios";

export const fetchData = async (
  url,
  method = "get",
  dataBody,
  customConfigs
) => {
  const defaultConfigs = {
    headers: {
      Authorization:
        "Bearer c_rupvuirvek2iflhhyclsdelz82gt0tjfzjwx4ctshjebxfx5qri5iqjq5yd8rjkc",
    },
  };

  const config = {
    ...defaultConfigs,
    ...customConfigs,
  };

  if (dataBody) {
    const { data } = await axios[method](url, dataBody, config);
    return data?.data;
  }

  const { data } = await axios[method](url, config);
  return data?.data;
};
