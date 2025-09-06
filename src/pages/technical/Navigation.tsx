import { NavLink } from "react-router";

export const Navigation = () => {
  return (
    <nav>
      <ol>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/me">Me</NavLink>
        </li>
      </ol>
    </nav>
  );
};
