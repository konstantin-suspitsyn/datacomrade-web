import Home from "../pages/Home";
import Login from "../pages/login/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/login/Register";
import App from "../App.jsx";

export const routes = [
  {
    path: "/",
    Component: App,
    errorElement: <NotFound />,
    children: [
      { index: true, Component: Home },
      {
        path: "/register",
        Component: Register,
      },

      {
        path: "/login",
        Component: Login,
      },
    ],
  },
];

export default routes;
