import React from "react";
import { NavbarWrapper } from "./NavbarStyle";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <h3>ueno.</h3>
      <ul>
        <li>Services</li>
        <li>clients</li>
        <li>careers</li>
        <li>about</li>
        <li>
          <button type="button" class="btn btn-primary">
            Contact
          </button>
        </li>
      </ul>
    </NavbarWrapper>
  );
};

export default Navbar;
