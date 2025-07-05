import { Homepage, Login, PageNotFound, Shop, Signup, TrangSuc } from "../pages";

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
  {
    key: 5,
    path: "/shop/*",
    component: Shop,
  },
  {
    key: 6,
    path: "/*",
    component: PageNotFound,
  }
];
