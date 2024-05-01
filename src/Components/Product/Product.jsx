import React from "react";
import style from "./Product.module.css";

const Product = () => {
  return (
    <section className={style.popularProducts}>
      <div className={style.popularProductsText}>
        <div className={style.popularProductsTextt}>
          <span>POPULAR PRODUCTS</span>
          <h4>Our Products</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut
            consequatur laboriosam ipsam.
          </p>
        </div>
      </div>
      <div className={style.popularProductsCards}>
        <div className={style.cardOne}>
          <div className={style.productCard}>
            <div className={style.productCardImage}></div>
            <div className={style.productCardText}>
          
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
