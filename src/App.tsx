import { Outlet } from "react-router";
import { Navigation } from "./pages/misc/header/Navigation";
import { Logo } from "./pages/misc/header/Logo";
import { RegisterLoginButtons } from "./pages/misc/header/RegisterLoginButtons";

export const CONTAINER =
  "mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8";

export const App = () => {
  return (
    <>
      <header className="bg-slate-900">
        <div className={CONTAINER}>
          <div className="block min-w-[150px] min-h-[20px]">
            <Logo />
          </div>
          <Navigation />
          <RegisterLoginButtons />
        </div>
      </header>
      <div className="clear-both"></div>
      <Outlet />
    </>
  );
};
