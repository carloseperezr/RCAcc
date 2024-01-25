import React from "react";
import BrandsCSS from "./Brands.module.css";
import Aderco from "../../../public/images/aderco.png";
import Naoevo from "../../../public/images/naoevo.png";

export const BrandsContainer = () => {
  return (
    <div className={`${BrandsCSS.brandsContainer}`}>
      <div className={`${BrandsCSS.brand1}`}>
        <img src={Aderco} alt="" />
      </div>
      <div className={`${BrandsCSS.brand2}`}>
        <img src={Naoevo} alt="" />
      </div>
    </div>
  );
};
