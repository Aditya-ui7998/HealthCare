import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="d-flex flex-column justify-content-center align-items-center py-3 my-4 border-top bg-dark text-white">
        <p className="mb-0 text-center">© 2024 Company, Inc</p>

        <a
          href="/"
          className="d-flex align-items-center justify-content-center mb-3 mb-md-0 link-light text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
        </a>

        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">
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
      </footer>
    </>
  );
};

export default Footer;
