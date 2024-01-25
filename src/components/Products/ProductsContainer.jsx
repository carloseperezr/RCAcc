import React, { useRef } from "react";
import ProductsCC from "./Products.module.css";
import { ProductsCards } from "./ProductsCards";
import { Fade } from "react-awesome-reveal";
import BarraLed from "/images/Barra_luz_LED7.png";
import Alarma from "/images/alarma_advertencia.png";
import Stops from "/images/Stops_Led_Traseros.png";
import LuzLED from "/images/Luzledcarros.png";

export const ProductsContainer = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={`${ProductsCC.ProductsContainer}`}>
      <Fade triggerOnce={true}>
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
      </Fade>
    </div>
  );
});

export default ProductsContainer;
