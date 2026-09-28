import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
      <div className="container">

        {/* Logo */}

        <NavLink className="navbar-brand fw-bold fs-3" to="/">
          <i className="bi bi-code-square text-primary me-2"></i>
          React CRUD
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item mx-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="bi bi-house-door-fill me-1"></i>
                Home
              </NavLink>
            </li>

            <li className="nav-item mx-2">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="bi bi-info-circle-fill me-1"></i>
                About
              </NavLink>
            </li>

            <li className="nav-item mx-2">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="bi bi-person-plus-fill me-1"></i>
                Contact
              </NavLink>
            </li>

            <li className="nav-item mx-2">
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="bi bi-speedometer2 me-1"></i>
                Admin
              </NavLink>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;