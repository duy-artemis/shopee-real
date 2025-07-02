import { Homepage, Login, Signup, TrangSuc } from "../pages";

export const ROUTES = [
  {
    key: 1,
    path: "/",
    component: Homepage,
  },
  {
    key: 2,
    path: "/signup",
    component: Signup,
  },
  {
    key: 3,
    path: "/login",
    component: Login,
  },
  {
    key: 4,
    path: "/trang-suc/*",
    component: TrangSuc,
  },
];
