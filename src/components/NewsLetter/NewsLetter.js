import React from "react";
import newsLetter1 from "./newsLetter.module.css";

const NewsLetter = () => {

  const imag1Newsletter =
  "https://www.oogio.net/wp-content/uploads/2022/11/Shutterstock_2090452231-3.jpg";

  return (
    <>
      <div className={newsLetter1.newContainer}>
        <div className={newsLetter1.backgroundimage}></div>

        <div className={newsLetter1.inpContainer}>
          <div className={newsLetter1.signUpContainer}>
          <button className={newsLetter1.btn}>הרשמה</button>
          <input
            // style={{ border: "1px solid black" }}
            type="text"
            placeholder="אימייל"
            required
          />
          </div>
        <h2 className={newsLetter1.h1}>
          אני רוצה להירשם למועדון של עוגות מהלב
          {/* <span className={newsLetter1.hurt}>מהלב</span> */}
        </h2>
        </div>

        <div className={newsLetter1.socialMedia}>
          <i class="bx bxl-twitter"></i>
          <i class="bx bxl-facebook-square"></i>
          <i class="bx bxl-youtube"></i>
          <i class="bx bxl-instagram"></i>
        </div>
        
      </div>


      
    </>
  );
};

export default NewsLetter;
