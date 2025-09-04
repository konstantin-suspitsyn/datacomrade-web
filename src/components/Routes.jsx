import Home from "../pages/Home";
import Login from "../pages/login/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/login/Register";
import App from "../App.jsx";
import Me from "../pages/login/Me.jsx";

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
        path: "/me",
        Component: Me,
      },

      {
        path: "/login",
        Component: Login,
      },
    ],
  },
];

export default routes;
