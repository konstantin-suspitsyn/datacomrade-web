import { Home } from "../pages/static/Home";
import { App } from "../App";
import { Login } from "../pages/login/Login";
import { Me } from "../pages/login/Me";
import { Register } from "../pages/login/Register";
import { NotFound } from "../pages/static/NotFound";
import { Logout } from "../pages/login/Logout";

export const HOME_LINK = "/";
export const LOGIN_LINK = "/login";
export const REGISTER_LINK = "/register";
export const ME_LINK = "/me";
export const LOGOUT_LINK = "/logout";

export const AllRoutes = [
  {
    path: HOME_LINK,
    Component: App,
    errorElement: <NotFound />,
    children: [
      { index: true, Component: Home },
      { path: LOGIN_LINK, Component: Login },
      { path: REGISTER_LINK, Component: Register },
      { path: ME_LINK, Component: Me },
      { path: LOGOUT_LINK, Component: Logout },
    ],
  },
];
