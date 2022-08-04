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
        "Bearer c_m9jmyhcalkxytkut6nfqnuzvmoombgwd1h3lvg9z653lh1hyiz7qxhaqgmmsldwg",
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
