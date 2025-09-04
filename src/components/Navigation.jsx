import { BrowserRouter, NavLink } from "react-router";

const Navigation = () => {
  return (
    <nav>
      <div>
        <ol>
          <li>
            <NavLink to="/">Dashboard</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/login">
              {({ isActive }) => (
                <span className={isActive ? "active" : ""}>Login</span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/me">Me</NavLink>
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Navigation;
