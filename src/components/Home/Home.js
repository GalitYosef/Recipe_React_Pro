import React, { useState, useEffect } from "react";
import homeCss from "./home.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

import pic1 from "../../assets/whatMake/sweetTivoni.jpeg";
import pic2 from "../../assets/whatMake/ cackebchoshot.jpeg";
import pic3 from "../../assets/whatMake/cackeshmarim.jpeg";
import pic4 from "../../assets/whatMake/cackepai.jpeg";
import pic5 from "../../assets/whatMake/cokies.jpeg";
import pic6 from "../../assets/whatMake/brounis.jpeg";
import Jar from "../Jar/Jar";
import BasicOfBaking from "../BasicOfBaking/BasicOfBaking";
import ImageSlider from "../ImageSlider/ImageSlider";
// image for tipim
import pastry from "../../assets/Tipim/shmarimPastry.jpeg";
import frizer from "../../assets/Tipim/frizer.jpeg";
import sugar from "../../assets/Tipim/sugar.jpeg";
import tavlin from "../../assets/Tipim/tavlinim.jpeg";
const Home = () => {
  const namesWhatMake = [
    {
      image: pic1,
      name: "מתוקים טבעוניים",
      path: "tivoni",
    },
    {
      image: pic2,
      name: "עוגות בחושות",
      path: "bchoshot",
    },
    {
      image: pic3,
      name: "עוגות שמרים",
      path: "shmarim",
    },
    {
      image: pic4,
      name: "פאי וטראט",
      path: "pai",
    },
    {
      image: pic5,
      name: "עוגיות וחיתוכיות",
      path: "coockies",
    },
    {
      image: pic6,
      name: "בראוניז ובלונדיס",
      path: "brauniz",
    },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolledTitle, setIsScrolledTitle] = useState(false);

  const [Tipim, settipim] = useState([
    { image: tavlin, sentences: "סגולות התבלינים" },
    { image: sugar, sentences: "תחליפי סוכר טבעיים" },
    { image: frizer, sentences: "הקפאת מזון" },
    { image: pastry, sentences: "בצק שמרים" },
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 524);
      // setIsScrolledTitle(scrollTop == 0);
      setIsScrolledTitle(scrollTop > 0);
    };
  
    // Call handleScroll on initial page load
    handleScroll();
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled, isScrolledTitle]);

  return (
    <>
      <section className={homeCss.banner} id="banner">
        <div className={homeCss.content}>
          <h3 className={isScrolledTitle? homeCss.scrolledTitle : ""}>?מה בא לך להכין היום </h3>

          <div className={homeCss.inputContainer}>
            <button className={homeCss.btn}>חפש לי</button>
            <input
              type="text"
              placeholder="חפש מתכונים, טיפים, אוספים ומדריכים"
            />
          </div>
          <div className={homeCss.categoryInput}>
            <button>פופולריים</button>
            <button>לשבת</button>
            <button>נוסטלגיים</button>
            <button>טיפים</button>
            <button>אוספים</button>
          </div>
        </div>
      </section>

      {/* מה באלכם להכים */}
      <section className={homeCss.section1}>
        <h2
          style={{ color: "rgb(53, 103, 103)" }}
          className={`${homeCss.myElement} ${
            isScrolled ? homeCss.scrolled : ""
          }`}
        >
          ?מה בא לכם להכין
        </h2>
        <hr
          className={` ${isScrolled ? homeCss.scrolled : ""}`}
          style={{
            background: "rgb(180, 180, 180)",
            height: "1px",
            width: "85%",
            textAlign: "center",
            margin: "auto",
            transfsorm: "scale(.6)",
            position: "relative",
            marginTop: "-22px",
            zIndex: "-1",
          }}
        />
        <div className={homeCss.containerWhatMake}>
          {namesWhatMake.map((item) => {
            return (
              <div className={homeCss.category}>
                <Link to={"/" + item.path}>
                  <img src={item.image} alt="d" />
                  <p className={homeCss.name}>{item.name}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* יסודות האפייה */}
      <section className={homeCss.section2}>
        <BasicOfBaking />
      </section>

      {/*  ממלאים את הצנצנת */}
      <section className={homeCss.section2}>
        <h2 style={{ color: "rgb(53, 103, 103)" }} className={homeCss.h2}>
          ממלאים את הצנצנת
        </h2>
        <hr
          style={{
            background: "rgb(180, 180, 180)",
            height: "1px",
            width: "85%",
            textAlign: "center",
            margin: "auto",
            position: "relative",
            marginTop: "-48px",
            zIndex: "-1",
          }}
        />
        <Jar />
      </section>

      {/* מדריכים וטיפים מומלצים */}
      <section className={homeCss.section3}>
        <h2 style={{ color: "rgb(53, 103, 103)" }} className={homeCss.h2}>
          מדריכים וטיפים מומלצים{" "}
        </h2>
        <hr
          style={{
            background: "rgb(180, 180, 180)",
            height: "1px",
            width: "85%",
            textAlign: "center",
            margin: "auto",
            position: "relative",
            marginTop: "-62px",
            zIndex: "-1",
          }}
        />
        <div className={homeCss.TipimContainer}>
          {Tipim.map((item, index) => (
            <>
              <div className={homeCss.imageContainer}>
                <img src={item.image} key={index} />
                <p>
                  {item.sentences}
                  <img className={homeCss.logoImage} src={logo} />
                </p>
              </div>

              
            </>
          ))}
           
        </div>
       <Link className={homeCss.Link}>
              <div className={homeCss.allTipimBtn}>
                כל המדריכים והטיפים
              </div>
              </Link>
      </section>

      {/* <section className={homeCss.popularSection}>
<ImageSlider/>
</section> */}

      {/* רישום למועדון */}
      {/* <div className={homeCss.section3}>
        <NewsLetter/>
      </div> */}

      {/* footer */}
      {/* <section className={homeCss.section4}>
        <Footer/>
      </section> */}
    </>
  );
};

export default Home;
