import ProductsCC from "./Products.module.css";
import { ProductsCards } from "./ProductsCards";
import BarraLed from "../../../public/images/Barra_luz_LED7.png";
import Alarma from "../../../public/images/alarma_advertencia.png";
import Stops from "../../../public/images/Stops_Led_Traseros.png";
import LuzLED from "../../../public/images/Luz_Led_Vehículos.png";

export const ProductsContainer = () => {
  return (
    <div className={`${ProductsCC.ProductsContainer}`}>
      <div className={`${ProductsCC.ProductsTitle}`}>
        <h2 className={`${ProductsCC.titleBold}`}>Productos</h2>
        <h2 className={`${ProductsCC.titleLight}`}>Destacados</h2>
      </div>
      <div className={`${ProductsCC.productsCardsContainer}`}>
        <ProductsCards title="Barra luz LED" img={BarraLed} />
        <ProductsCards title="Alarma advertencia" img={Alarma} />
        <ProductsCards title="Stops Traseros LED" img={Stops} />
        <ProductsCards title="Luz LED vehiculos" img={LuzLED} />
      </div>
    </div>
  );
};
