import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../public/static/images/logo-img.png";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "Blockchain", path: "/blockchain" },
  { label: "Metaverse", path: "/metaverse" },
  { label: "AI Apps", path: "/ai-development" },
  { label: "Web Development", path: "/web" },
  { label: "Mobile Apps", path: "/mobile-app" },
  { label: "About", path: "/about" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="nav-wrapper">
      <div className="custom-navbar container">

        {/* LEFT SIDE */}
        <div className="nav-top">

          {/* LOGO */}
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          {/* HAMBURGER */}
          <div
            className="hamburger"
            onClick={() => setOpen(!open)}
          >
            ☰
          </div>

        </div>

        {/* MENU */}
        <ul className={`nav-links ${open ? "active" : ""}`}>

          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* MOBILE CONTACT BUTTON */}
          <div className="mobile-btn">
            <button
              className="contact-btn"
              onClick={() => {
                navigate("/contact");
                setOpen(false);
              }}
            >
              Contact
            </button>
          </div>
        </ul>

        {/* DESKTOP BUTTON */}
        <button
          className="contact-btn desktop-btn"
          onClick={() => navigate("/contact")}
        >
          Contact
        </button>

      </div>
    </div>
  );
};

export default Navbar;