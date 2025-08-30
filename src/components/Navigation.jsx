import { BrowserRouter, NavLink } from "react-router";

const Navigation = () => {
  return (
    <BrowserRouter>
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
          </ol>
        </div>
      </nav>
    </BrowserRouter>
  );
};

export default Navigation;
