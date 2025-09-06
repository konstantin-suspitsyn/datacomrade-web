import { Outlet } from "react-router";
import { Navigation } from "./pages/technical/Navigation";

export const App = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};
