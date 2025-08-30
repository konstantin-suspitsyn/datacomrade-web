import { RouterProvider } from "react-router";
import Routes from "./components/Routes";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div>
      <Navigation />
      <RouterProvider router={Routes} />
    </div>
  );
};

export default App;
