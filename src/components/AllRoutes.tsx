import { NotFound } from "../pages/technical/NotFound";
import { Home } from "../pages/static/Home";
import { App } from "../App";
import { Login } from "../pages/login/Login";
import { Me } from "../pages/login/Me";

export const AllRoutes = [
  {
    path: "/",
    Component: App,
    errorElement: <NotFound />,
    children: [
      { index: true, Component: Home },
      { path: "/login", Component: Login },
      { path: "/me", Component: Me },
    ],
  },
];
