export const URL_LOGIN = "login";
export const URL_REGISTER = "register";
export const URL_LOGOUT = "logout";
export const URL_REFRESH_TOKEN = "refresh-access-token";
import { instance } from "./index";

const authApi = {
  registerAccount(body) {
    return instance.post(URL_REGISTER, body);
  },
  login(body) {
    return instance.post(URL_LOGIN, body);
  },
  logout() {
    return instance.post(URL_LOGOUT);
  },
};
// registerAccount(body: { email: string; password: string }) {
//     return instance.post(URL_REGISTER, body);
//   },
//   login(body: { email: string; password: string }) {
//     return instance.post(URL_LOGIN, body);
//   },
//   logout() {
//     return instance.post(URL_LOGOUT);
//   },

export default authApi;
