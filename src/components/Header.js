import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper  green accent-4">
        <NavLink to="/" className="brand-logo">
          React Food
        </NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/about" end>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" end>
              Contact
            </NavLink>
          </li>
          {/* <li>
            <a
              href="https://github.com/vadimlipatov/react-food"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
