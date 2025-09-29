import { Home } from "../pages/static/Home";
import { App } from "../App";
import { Login } from "../pages/login/Login";
import { Me } from "../pages/login/Me";
import { Register } from "../pages/login/Register";
import { NotFound } from "../pages/static/NotFound";
import { Logout } from "../pages/login/Logout";
import { GetAllDomains } from "../pages/domain/GetAllDomains";
import { CreateDomain } from "../pages/domain/CreateDomain";

export const HOME_LINK = "/";
export const LOGIN_LINK = "/login";
export const REGISTER_LINK = "/register";
export const ME_LINK = "/me";
export const LOGOUT_LINK = "/logout";

export const ALL_DOMAINS = "/domains";
export const CREATE_DOMAINS = "/domains/create";

export const BACKEND_DOMAINS_LINK = "/v1/domain";
export const BACKEND_ROLES_LINK = "/v1/roles";

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
      { path: ALL_DOMAINS, Component: GetAllDomains },
      { path: CREATE_DOMAINS, Component: CreateDomain },
    ],
  },
];
