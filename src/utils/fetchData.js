import axios from "axios";

export const fetchData = async (url) => {
  const config = {
    headers: {
      Authorization:
        "Bearer c_wvczm21xwv13wthbnnpnylxoiuquy8y7imrgalnosgqnduuudlt1qcblne1vgzhr",
    },
  };

  const { data } = await axios.get(url, config);
  return data?.data;
};
