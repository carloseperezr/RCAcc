import "./App.css";
import { BrandsContainer } from "./components/Brands/BrandsContainer";
import { FooterContainer } from "./components/Footer/FooterContainer";
import { NavbarContainer } from "./components/NavBar/NavBarContainer";
import { ProductsContainer } from "./components/Products/ProductsContainer";
import WhatsAppButton from "./components/WhatsApp/WhatsAppButton";
import { Home } from "./views/Home";

function App() {
  return (
    <>
      <NavbarContainer />
      <Home />
      <BrandsContainer />
      <ProductsContainer />
      <WhatsAppButton phoneNumber={"3196756495"} />
      <FooterContainer />
    </>
  );
}

export default App;
