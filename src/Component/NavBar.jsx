import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bd-example m-0 border-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> {/* Use bg-dark and navbar-dark */}
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">
            Healthcare Services
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/service-list" className="nav-link text-white">
                  Service List
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact-us" className="nav-link text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
