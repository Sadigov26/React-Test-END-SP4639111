import React from "react";
import style from "./Hero.module.css";

const Hero = () => {
  return <section className={style.shopclub}>

        <div className={style.container}>
            <div className={style.shopclubtext}>
              <h1>Shop With Us</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.
              </p>
              <button className={style.one}>SHOP NOW</button>
              <button className={style.two}>CLUB MEMBERSHIP</button>
            </div>
        </div>


  </section>;
};

export default Hero;
