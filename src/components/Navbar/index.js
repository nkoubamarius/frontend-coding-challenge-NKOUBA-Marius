import { Link } from "react-router-dom";
import React from "react";
import { NavbarContainer, NavbarLogo } from "./NavbarElements";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Link path="/ok">
        <NavbarLogo
          src="https://pngimg.com/uploads/github/github_PNG15.png"
          alt="Github logo"
        />
      </Link>
    </NavbarContainer>
  );
};

export default Navbar;
