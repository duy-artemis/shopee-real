import path from "path";
import { Homepage, Login, PageNotFound, Shop, Signup, TrangSuc } from "../pages";
import Cart from "../pages/Cart/Cart";
import ThankYou from "../pages/ThankYou/ThankYou";
import ShopRoutes from "./Shop/ShopRoutes";

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
    component: ShopRoutes,
  },
  {
    key: 6,
    path: "/*",
    component: PageNotFound,
  },
  {
    key: 7,
    path: "/cart",
    component: Cart
  },
  {
    key: 8,
    path: "/thank-you",
    component: ThankYou
  }
];
