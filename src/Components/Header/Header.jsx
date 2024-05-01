import React from "react";
import style from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className={style.header}>
      <header>
        <div className={style.headerTop}>
          <div className={style.iconBox}>
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className={style.contactBox}>
            <FontAwesomeIcon icon={faInstagram} style={{ color: "#ea441a" }} />
            <p> (+1) 234 5678 9101</p>
            <FontAwesomeIcon icon={faInstagram} style={{ color: "#ea441a" }} />
            <p>shop@yourdomain.com</p>
          </div>
        </div>
        <div className={style.headerBottom}>
          <div className={style.logo}>
            <h1>Selling.</h1>
          </div>
          <nav>
            <ul>
              <Link to="/" style={{ color: "#ea441a" }}>
                Home
              </Link>
              <Link to="/basket">Products</Link>
              <a href="">About Us</a>
              <a href="">Special</a>
              <a href="">Testimonials</a>
              <a href="">Blog</a>
              <a href="">Contact</a>
            </ul>
          </nav>
          {/* <h2><i className={faBars}></i></h2> */}
        </div>
      </header>
    </div>
  );
};

export default Header;
