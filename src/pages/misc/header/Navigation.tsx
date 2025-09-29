import { NavLink } from "react-router";

const MENU_TW_CSS = "flex flex-1 items-center justify-end md:justify-between";
const MENU_LINKS = "text-gray-500 transition hover:text-gray-500/75";

export const Navigation = () => {
  return (
    <div className={MENU_TW_CSS}>
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <NavLink className={MENU_LINKS} to="/">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink className={MENU_LINKS} to="/login">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className={MENU_LINKS} to="/register">
              Register
            </NavLink>
          </li>
          <li>
            <NavLink to="/me">Me</NavLink>
          </li>
          <li>
            <NavLink className={MENU_LINKS} to="/domains">
              Domains
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
