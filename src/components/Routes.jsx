import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/login/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/login/Register";

const Routes = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    errorElement: <NotFound />,
  },
  {
    path: "/register",
    Component: Register,
  },

  {
    path: "/login",
    Component: Login,
  },
]);
export default Routes;
