import axios from "../../constants/axiosConfig";

export const cancel = async (body) => {
  let config = {
    headers: {
      Authorization:
        "Bearer " + JSON.parse(localStorage.getItem("aireuser"))?.token,
    },
  };
  try {
    const response = await axios.delete(
      `/api/CustomerOrder/Cancel?orderID=` + body,
      config
    );
    return response;
  } catch (error) {
    return error.response;
  }
};
