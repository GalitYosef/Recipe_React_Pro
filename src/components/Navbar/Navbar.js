import React, { useState } from "react";
import { Link } from "react-router-dom";
import navbarCss from "./navbar.module.css";
import logo from "../../assets/images/logo.png";
import Category from "../Category/Category";
const Navbar = () => {
  return (
    <>
      <header>
        <div className={navbarCss.minusContainer}>
          <div className={navbarCss.firstContainer}>
            <ul>
              <li>צרו קשר</li>
              <li>About Us</li>
              <li>אודות</li>
              <li>
                ספר המתכונים שלי <i class="bx bxs-book-heart"></i>
              </li>
            </ul>

            <div className={navbarCss.socialMedia}>
              <ul>
                <li>
                  <i class="bx bxl-youtube"></i>
                </li>
                <li>
                  <i class="bx bxl-instagram-alt"></i>
                </li>
                <li>
                  <i class="bx bxl-facebook"></i>
                </li>
              </ul>
            </div>
          </div>
          <hr style={{ height: "0.2px", background: "rgba(197,185,151,.7)" }} />
          
          <div className={navbarCss.secondContainer}>
            <button>למקצוענים במזון</button>
            <span>מתחילים בהכי איכותי</span>
            <div className={navbarCss.logoContainer}>
              <Link to={"/home"}>
                <img src={logo} alt="logo" />
              </Link>
            </div>
            
            <span>מתחילים בהכי איכותי</span>

            <span>מתחילים בהכי איכותי</span>
            
          </div>

        </div>
      </header>

      {/* <header className={navbarCss.header}>
       
        <form className={navbarCss.searchRecipe}>            
        <label for="search-box" class="fas fa-search" ></label>
            <input type="search" name="" id="search-box" placeholder="...חפש מתכון" />
        </form> 


        <ul className={navbarCss.ul}>
            <li><Link className={navbarCss.link} to="/kinuchim">קינוחים</Link></li>
            <li><Link className={navbarCss.link} to="/chees">עוגות גבינה</Link></li>
            <li><Link className={navbarCss.link} to="/cakes">עוגות</Link></li>
            <li><Link className={navbarCss.link} to="/home">בית</Link></li> 
        </ul>


        
        <Link to={'/home'} className={navbarCss.logo}> 
        <img src={hartlogo} style={{width:'100%', height:'30px'}} alt='logo'/>
        <span>מהלב</span>  עוגות 
        </Link>


    </header> */}
      {/* <nav> */}
      {/* <form className={navbarCss.searchRecipe}> */}
      {/* <i className={`bx bxs-heart ${navbarCss.isHeartActive ? navbarCss.active : ''}`}></i> */}
      {/* <label for="search-box" class="fas fa-search"></label> */}
      {/* <input
            type="search"
            name=""
            id="search-box"
            placeholder="...חפש מתכון"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
  
          /> */}
      {/* </form> */}

      {/* <ul>
          <li>
            <Link to="/chees">עוגות גבינה</Link>
            <ul>
              <li>
                <Link to="/chees">עוגות גבינה</Link>
              </li>
              <li>
                <Link to="/chees">עוגות גבינה</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/chees">עוגות גבינה</Link>
            <ul>
              <li>
                <Link to="/chees">עוגות גבינה</Link>
              </li>
              <li>
                <Link to="/chees">עוגות גבינה</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/chees">עוגות גבינה</Link>
          </li>
          <li>
            <Link to="/home">בית</Link>
          </li>
        </ul> */}
      {/* <Link to={"/home"} className={navbarCss.logo}>
          <img src={logo} alt="logo" />
        </Link> */}
      {/* </nav> */}
    </>
  );
};

export default Navbar;
