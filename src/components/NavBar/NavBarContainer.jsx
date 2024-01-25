import React, { useState } from "react";
import { Logo } from "../Logo/Logo";
import NavBarCSS from "./Navbar.module.css";

export const NavbarContainer = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`${NavBarCSS.navBarContainer}`}>
      <div className="title">
        <Logo type="dark" />
      </div>
      <div
        className={`${NavBarCSS.menu}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? NavBarCSS.open : ""}>
        <li>
          <a href="#">PRODUCTOS</a>
        </li>
        <li>
          {" "}
          <a href="#">NOSOTROS</a>
        </li>
        <li>
          {" "}
          <a href="#">NAOEVO</a>
        </li>
        <li>
          {" "}
          <a href="#">ADERCO</a>
        </li>
        <li>
          {" "}
          <a href="#">CONTACTO</a>
        </li>
      </ul>
    </nav>
  );
};
