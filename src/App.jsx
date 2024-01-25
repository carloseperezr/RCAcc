import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { FooterContainer } from "./components/Footer/FooterContainer";
import { NavbarContainer } from "./components/NavBar/NavBarContainer";
import AboutComponent from "./components/About/AboutComponent";
import BrandsContainer from "./components/Brands/BrandsContainer";
import ProductsContainer from "./components/Products/ProductsContainer";
import WhatsAppButton from "./components/WhatsApp/WhatsAppButton";
import HeroContainer from "./components/Hero/HeroContainer";

function App() {
  const [activeSection, setActiveSection] = useState("");

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const brandsRef = useRef(null);
  const productRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.scrollY;
      const sections = [
        { ref: heroRef, name: "hero" },
        { ref: aboutRef, name: "about" },
        { ref: brandsRef, name: "brands" },
        { ref: productRef, name: "products" },
        { ref: contactRef, name: "contact" },
      ];

      let found = false;

      for (const section of sections) {
        if (
          section.ref &&
          section.ref.current &&
          yOffset >= section.ref.current.offsetTop &&
          yOffset <
            section.ref.current.offsetTop + section.ref.current.clientHeight
        ) {
          setActiveSection(section.name);
          found = true;
          break;
        }
      }

      if (!found) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [heroRef, aboutRef, brandsRef, productRef, contactRef]);

  const scrollToSection = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <NavbarContainer
        scrollToSection={scrollToSection}
        heroRef={heroRef}
        aboutRef={aboutRef}
        brandsRef={brandsRef}
        productRef={productRef}
        contactRef={contactRef}
      />
      <HeroContainer ref={heroRef} />
      <AboutComponent ref={aboutRef} />
      <BrandsContainer ref={brandsRef} />
      <ProductsContainer ref={productRef} />
      <WhatsAppButton phoneNumber={"1 786 862 3868"} />
      <FooterContainer ref={contactRef} />
    </>
  );
}

export default App;
