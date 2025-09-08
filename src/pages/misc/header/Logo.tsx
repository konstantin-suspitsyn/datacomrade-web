import { NavLink } from "react-router";
import white_logo from "/logo_white.svg";
export const Logo = () => {
  return (
    <div>
      <NavLink to="/">
        <img src={white_logo} alt="dataComrade" />
      </NavLink>
    </div>
  );
};
