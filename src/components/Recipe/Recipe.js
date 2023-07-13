import React, { useRef, useState } from "react";
import recipeCss from "./recipe.module.css";
import { useParams } from "react-router-dom";
import { useLocation, Link } from "react-router-dom";
import icon1 from "../../assets/sharingIcon/face-h-1.webp";
import icon2 from "../../assets/sharingIcon/fb-h-1-1.webp";
import icon3 from "../../assets/sharingIcon/heart-h.webp";
import icon4 from "../../assets/sharingIcon/mail-1.webp";
import icon5 from "../../assets/sharingIcon/pinteres-h-1-1.webp";
import icon6 from "../../assets/sharingIcon/print-1.webp";
import icon7 from "../../assets/sharingIcon/whatsapp-h-2.webp";

const Recipe = () => {
  const iconsInfo = [
    {
      image: icon1,
      name: "הכנתי ואהבתי",
    },
    {
      image: icon2,
      name: "פייסבוק",
    },
    {
      image: icon5,
      name: "פינטרסט",
    },
    {
      image: icon6,
      name: "הדפסה",
    },
    ,
    {
      image: icon3,
      name: "הוספה למחברת",
    },
  ];

  const [checkboxStates, setCheckboxStates] = useState({});

  const handleCheckboxChange = (event, i) => {
    setCheckboxStates({
      ...checkboxStates,
      [i]: event.target.checked,
    });
  };

  // const { value } = useParams();
  const location = useLocation();
  const state = location.state;
  console.log(state, "state");
  return (
    <>
      <h3 className={recipeCss.h3}>?אז איך מכינים</h3>
      <div className={recipeCss.container}>
        {state && (
          <>
            <div className={recipeCss.recipeContainer}>
              
              <div
                className={recipeCss.backgroundimage}
                style={{
                  backgroundImage: `url(${state.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <img src={state.image} className={recipeCss.img} />
              <h2>{state.name}</h2>

              <div className={recipeCss.recipeDetails}>
                {/* שם המתכון */}
                {state.titleRecipe ? (
                  <div className={recipeCss.titleRecipe}>
                    {state.titleRecipe}
                  </div>
                ) : (
                  ""
                )}

                <div className={recipeCss.burst12}></div>

                {/* כמות העוגיות */}
                {state.count ? (
                  <div className={recipeCss.count}>{state.count}</div>
                ) : (
                  ""
                )}

                {/* כותרת המצרכים */}
                <div className={recipeCss.titleContainer1}>
                  <hr
                    style={{
                      background: "gray",
                      height: "0.1px",
                      width: "100%",
                      textAlign: "center",
                      margin: "auto",
                    }}
                  />
                  <p className={recipeCss.mitzrachim}>המצרכים</p>
                  <hr
                    style={{
                      background: "gray",
                      height: "0.1px",
                      width: "100%",
                      textAlign: "center",
                      margin: "auto",
                    }}
                  />
                </div>

                {state.forRecipe ? (
                  <div className={recipeCss.forRecipe}>:{state.forRecipe}</div>
                ) : (
                  ""
                )}

                {/* מצרכים */}
                {state.Ingredients
                  ? state.Ingredients.map((i) => (
                      <div className={recipeCss.Ingredients} key={i}>
                        <input
                          type="checkbox"
                          className={recipeCss.checkbox}
                          checked={checkboxStates[i] }
                          onChange={(event) => handleCheckboxChange(event, i)}
                        />

                        <p
                          style={
                            checkboxStates[i]
                              ? { textDecoration:'line-through' }
                              : {}
                          }
                          className={recipeCss.p}
                        >
                          {i}
                        </p>
                      </div>
                    ))
                  : null}

                {/*  כותרת אופן הכנה */}
                <div className={recipeCss.titleContainer2}>
                  <hr
                    style={{
                      background: "gray",
                      height: "0.1px",
                      width: "100%",
                      textAlign: "center",
                      margin: "auto",
                    }}
                  />
                  {state.ofenHachana ? (
                    <p className={recipeCss.ofenHachana}>{state.ofenHachana}</p>
                  ) : (
                    ""
                  )}
                  <hr
                    style={{
                      background: "gray",
                      height: "0.1px",
                      width: "100%",
                      textAlign: "center",
                      margin: "auto",
                    }}
                  />
                </div>

                {/* אופן הכנה הסבר*/}
                {state.making
                  ? state.making.map((i, index) => (
                      <div className={recipeCss.Ingredients} key={i}>
                        <ul className={recipeCss.Pmaking}>
                          <li>{i}</li>
                        </ul>
                      </div>
                    ))
                  : null}

                {/* כותרת הארות והערות */}
                {state.additionsTitle ? (
                  <div className={recipeCss.additionsTitle}>
                    {state.additionsTitle}
                  </div>
                ) : (
                  ""
                )}

                {/* הארות ותוספות */}
                {state.additions
                  ? state.additions.map((i, index) => (
                      <div className={recipeCss.Ingredients} key={i}>
                        <ul className={recipeCss.Padditions}>
                          <li>{i}</li>
                        </ul>
                      </div>
                    ))
                  : null}

                {/*  אהבתם? שתפו את המתכון */}
                <div className={recipeCss.sharingTitle}>
                  <p className={recipeCss.p}>אהבתם ? שתפו את המתכון</p>
                </div>
                <div className={recipeCss.sharingContainer}>
                  {iconsInfo.map((item) => (
                    <>
                      <div className={recipeCss.iconCon}>
                        <img src={item.image} />
                        <p>{item.name}</p>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Recipe;
