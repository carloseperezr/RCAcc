import React, { useRef } from "react";
import BrandsCSS from "./Brands.module.css";
import Aderco from "../../../public/images/aderco.png";
import Naoevo from "../../../public/images/naoevo.png";
import { Slide } from "react-awesome-reveal";

const BrandsContainer = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={`${BrandsCSS.brandsContainer}`}>
      <div className={`${BrandsCSS.brand1}`}>
        <Slide triggerOnce={true}>
          <a href="https://www.instagram.com/aderco.ve" target="_blank">
            {" "}
            <img src={Aderco} alt="Aderco Logo" />
          </a>
        </Slide>
      </div>
      <div className={`${BrandsCSS.brand2}`}>
        <Slide direction="right" triggerOnce={true}>
          <a href="https://www.instagram.com/proledgroupve" target="_blank">
            <img src={Naoevo} alt="NaoEvo Logo" />
          </a>
        </Slide>
      </div>
    </div>
  );
});

export default BrandsContainer;
