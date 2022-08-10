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
        "Bearer c_69vp4ecd4ztr2x5b2gwd2nibfoqtmtqrmwzs5u2ryaa8eieemalgslmthacgw4gm",
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
