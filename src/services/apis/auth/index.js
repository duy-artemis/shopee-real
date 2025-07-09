import { instance } from "..";
import API from "../../../common/API";

const apis = {
  resgister: (data) => instance.post(API.REGISTER, data),
};

export default apis;
