import CardCSS from "./Products.module.css";

export const ProductsCards = ({ title, img }) => {
  return (
    <div className={`${CardCSS.cardContainer}`}>
      <div className={`${CardCSS.imgWrapper}`}>
        <div className={`${CardCSS.cardIMG}`}>
          <img src={img} alt="" />
        </div>
      </div>
      <div className={`${CardCSS.cardTitle}`}>
        <h3>{title}</h3>
      </div>
    </div>
  );
};
