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
        "Bearer c_541rvdp9eon9bzxqihajucq3jsqjsqn8ghbb91o5mjkyetsp1kdousqclpvs6n9t",
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
