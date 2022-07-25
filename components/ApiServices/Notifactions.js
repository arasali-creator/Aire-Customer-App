import axios from "../../constants/axiosConfig";

export const notifications = async (id) => {
  let config = {
    headers: {
      Authorization: `Bearer  ${
        JSON.parse(localStorage.getItem("aireuser"))?.token
      }`,
    },
  };
  try {
    const response = await axios.post(
      `/api/CustomerAccount/GetNotifications?PageNumber=1&PageSize=10&Id=${id}`,
      config
    );
    return response;
  } catch (error) {
    return error.response;
  }
};
