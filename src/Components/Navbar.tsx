import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-0 lh-lg">
      <div className="container">
        <Link to="/" className="navbar-brand">
          PixelBay
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/courseList" className="nav-link">
                Course List
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/movieList" className="nav-link">
                Movie List
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/productList" className="nav-link">
                Product List
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contactForm" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
