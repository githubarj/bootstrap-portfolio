import { FaLaptopCode } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
function NavBar() {
  const navlinks = [
    "Home",
    "Services",
    "Testimonials",
    "Faq",
    "Portfolio",
    "Contact",
  ];

  return (
    <nav className="navbar navbar-expand-lg  navbar-dark menu">
      <div className="container brand-logo">
        <FaLaptopCode />
        <a className="navbar-brand" href="#">
          Githubarj
        </a>
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
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {navlinks.map((item, index) => (
              <li key={index} className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <button type="button" className="rounded-pill btn-rounded ">
            +254 798320724
            <span>
              <FaPhoneAlt />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
