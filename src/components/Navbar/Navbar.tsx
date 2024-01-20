import { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar: React.FC = () => {
  const { isLoggedIn, logout } = useAuth();
  const [activeNavItem, setActiveNavItem] = useState<string>("home");
  const navigate = useNavigate();

  const handleNavItemClick = (itemName: string) => {
    setActiveNavItem(itemName);
    navigate(`/${itemName}`);
  };

  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <li
            className={`nav-item ${activeNavItem === "home" ? "active" : ""}`}
            onClick={() => handleNavItemClick("home")}
          >
            Home
          </li>
          <li
            className={`nav-item ${activeNavItem === "about" ? "active" : ""}`}
            onClick={() => handleNavItemClick("about")}
          >
            About
          </li>
          <li
            className={`nav-item ${
              activeNavItem === "services" ? "active" : ""
            }`}
            onClick={() => handleNavItemClick("services")}
          >
            Services
          </li>
          <li
            className={`nav-item ${
              activeNavItem === "contact" ? "active" : ""
            }`}
            onClick={() => handleNavItemClick("contact")}
          >
            Contact
          </li>
          {isLoggedIn ? (
            <li
              style={{
                marginLeft: "auto",
                display: "flex",
                color: "#fff",
              }}
            >
              <li className={`nav-item`}>Welcome Back ...</li>
              <li className={`nav-item`} onClick={() => logout()} >
                Logout
              </li>
            </li>
          ) : (
            <li style={{ marginLeft: "auto", display: "flex" }}>
              <li
                className={`nav-item ${
                  activeNavItem === "login" ? "active" : ""
                }`}
                onClick={() => handleNavItemClick("login")}
              >
                Login
              </li>
              <li
                className={`nav-item ${
                  activeNavItem === "register" ? "active" : ""
                }`}
                onClick={() => handleNavItemClick("register")}
              >
                Register
              </li>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
