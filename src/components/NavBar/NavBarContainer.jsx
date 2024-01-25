import React, { useState } from "react";
import { Logo } from "../Logo/Logo";
import NavBarCSS from "./NavBar.module.css";
import { NavLinks } from "../NavLinks/NavLinks";

export const NavbarContainer = ({
  scrollToSection,
  heroRef,
  aboutRef,
  brandsRef,
  productsRef,
  contactRef,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`${NavBarCSS.navBarContainer}`}>
      <div className="title">
        <Logo type="dark" scrollToSection={scrollToSection} heroRef={heroRef} />
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
        <NavLinks
          scrollToSection={scrollToSection}
          heroRef={heroRef}
          aboutRef={aboutRef}
          brandsRef={brandsRef}
          productsRef={productsRef}
          contactRef={contactRef}
        />
      </ul>
    </nav>
  );
};
