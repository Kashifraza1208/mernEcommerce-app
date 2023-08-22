import React from "react";
import playStore from "../../../images/playstore.png";
import AppStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={AppStore} alt="Appstore" />
      </div>
      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2023 &copy; Kashif</p>
      </div>
      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/kashifraza1208/">Instagram</a>
        <a href="https://www.linkedin.com/in/kashifraza1208/">Linkedin</a>
        <a href="https://github.com/Kashifraza1208">Github</a>
      </div>
    </footer>
  );
};

export default Footer;
