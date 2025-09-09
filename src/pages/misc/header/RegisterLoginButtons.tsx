import { NavLink } from "react-router";
import { LOGIN_LINK, REGISTER_LINK } from "../../../components/AllRoutes.tsx";
import { useAuth } from "../../../hooks/useAuth.tsx";

export const RegisterLoginButtons = () => {
  const auth = useAuth();

  let logout = false;

  if (auth.isAuthenticated === true) {
    logout = true;
  }

  return (
    <div className="flex items-center gap-4">
      <div className="sm:flex sm:gap-4">
        {!logout ? (
          <NavLink
            className="block rounded-md bg-rose-600 px-4 py-1.5 sm:px-5 sm:py-2.5 text-sm font-medium text-white transition hover:bg-rose-700"
            to={LOGIN_LINK}
          >
            Login
          </NavLink>
        ) : undefined}

        {!logout ? (
          <NavLink
            className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-rose-600 transition hover:text-rose-600/75 sm:block"
            to={REGISTER_LINK}
          >
            Register
          </NavLink>
        ) : (
          <NavLink
            className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-rose-600 transition hover:text-rose-600/75 sm:block"
            to={REGISTER_LINK}
          >
            Register
          </NavLink>
        )}
      </div>

      <button className="block rounded-sm bg-transparent p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
        <span className="sr-only">Toggle menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );
};
