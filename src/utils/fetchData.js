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
        "Bearer c_ftbdvan8z2pjd7jd0busjn2prrouawgbjucen9caidhuq26dkliavrsw6szxrczf",
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
