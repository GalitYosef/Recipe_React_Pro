import React from "react";
import footerCss from "./footer.module.css";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* <div className={footerCss.titleContainer}>
        <div>עקבו אחרי בסושיאל</div>
        <div>חדש באתר</div>
        <div>קישורים חשובים</div>
      </div> */}
      {/* <div className={footerCss.footer}>
  <div className={footerCss.contain}>
  <div className={footerCss.col}>
    <h1>Company</h1>
    <ul>
      <li>About</li>
      <li>Mission</li>
      <li>Services</li>
      <li>Social</li>
      <li>Get in touch</li>
    </ul>
  </div>
  <div className={footerCss.col}>
    <h1>Products</h1>
    <ul>
      <li>About</li>
      <li>Mission</li>
      <li>Services</li>
      <li>Social</li>
      <li>Get in touch</li>
    </ul>
  </div>
  <div className={footerCss.col}>
    <h1>Accounts</h1>
    <ul>
      <li>About</li>
      <li>Mission</li>
      <li>Services</li>
      <li>Social</li>
      <li>Get in touch</li>
    </ul>
  </div>
  <div className={footerCss.col}>
    <h1>Resources</h1>
    <ul>
      <li>Webmail</li>
      <li>Redeem code</li>
      <li>WHOIS lookup</li>
      <li>Site map</li>
      <li>Web templates</li>
      <li>Email templates</li>
    </ul>
  </div>


<div class="clearfix"></div>
</div>
      </div> */}
      {/* 
      <footer className={footerCss.footer}>

    <div className={footerCss.socialMedia}>

      <i class='bx bxl-twitter'></i>
      <i class='bx bxl-facebook-square'></i>
      <i class='bx bxl-youtube' ></i>
      <i class='bx bxl-instagram' ></i>

    </div>
    
  </footer> */}
      <footer>
        <div className={footerCss.footer}>
          
          {/* icons */}
          <div className={footerCss.row}>
            <a href="#">
              <i class="bx bxl-facebook-square"></i>
            </a>
            <a href="#">
              <i class="bx bxl-instagram"></i>
            </a>
            <a href="#">
              <i class="bx bxl-youtube"></i>
            </a>
            <a href="#">
              <i class="bx bxl-twitter"></i>
            </a>
          </div>

          <div className={footerCss.row}>
            <ul>
              <li>
                <a href="#">צור קשר</a>
              </li>
              <li>
                <a href="#">השרותים שלנו</a>
              </li>
              <li>
                <a href="#">מתכונים נבחרים</a>
              </li>
              <li>
                <a href="#">מתכונים פופולאריים</a>
              </li>
              <li>
                <a href="#">שימושי</a>
              </li>
            </ul>
          </div>

          <div className={footerCss.row}>
            INFERNO Copyright © 2021 Inferno - All rights reserved || Designed
            By: Mahesh
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
