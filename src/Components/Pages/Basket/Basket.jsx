// ProductCard.jsx

import React from 'react';
import styles from "./Basket.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ item }) => {
  const addToCart = () => {
    // Önce localStorage'dan mevcut sepeti alın
    const storedCart = localStorage.getItem('cart');
    let cartItems = [];

    if (storedCart) {
      // localStorage'da bir sepet varsa, onu alın ve diziye dönüştürün
      cartItems = JSON.parse(storedCart);
    }

    // Yeni ürünü sepete ekleyin
    cartItems.push(item);

    // Sepeti localStorage'a geri kaydedin
    localStorage.setItem('cart', JSON.stringify(cartItems));
  };

  return (
    <div className={styles.Procard}>
      <div className={styles.productCard}>
        <div className={styles.productCardImage}></div>
        <img src={item.thumbnail} alt="" />
        <div className={styles.productCardText}>
          <h5>{item.title}</h5>
          <div>
            <FontAwesomeIcon icon={faStar} className={styles.star}/>
            <span>5.0</span>
            <FontAwesomeIcon icon={faHeart} className={styles.heart}/>
            <span>29</span>
          </div>
          <p>{item.description}</p>
          <button onClick={addToCart} className={styles.prdctBtnOne}>CART</button>
          <button className={styles.prdctBtnTwo}>VIEW</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
