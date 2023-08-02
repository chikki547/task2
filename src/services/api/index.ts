import Axios from "axios";
import { Configuration } from "./configuration";

const config = new Configuration();
//creation of the instance for post and get call
const api = Axios.create({
  baseURL: config.GetConfig("API_URL"),
});

export default api;
