import axios from "axios";
import CONST from "../utils/constants";

const config = {
  baseURL: CONST.BASE_URL_API,
  headers: {
    "content-type": "application/json",
    "x-hasura-admin-secret": CONST.REACT_APP_ADMIN_SECRET,
  },
};

const axiosInstance = axios.create(config);

export default axiosInstance;
