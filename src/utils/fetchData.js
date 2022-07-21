import axios from "axios";

export const fetchData = async (url) => {
  const config = {
    headers: {
      Authorization:
        "Bearer c_nrheveqt5czb2ckmcauvoobzzkkx5nnpdxphxuszvdid70tgkix94pempgiqypq8",
    },
  };

  const { data } = await axios.get(url, config);
  return data?.data;
};
