import React, { useRef, useState, useEffect } from "react";
import categoryCss from "./category.module.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";

const Category = (props) => {
  const [visibleRecipes, setVisibleRecipes] = useState(3); //מספר התכונים שיופיעו מינימום להתחלה
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreRecipes = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setVisibleRecipes((prevVisibleRecipes) => prevVisibleRecipes + 1); // בעת לחיצה על מתכונים נוספים אז מספר המתכונים שמוצגים במסך יעודכן , ויוצג מתכון אחד יותר בנוסף למה שמוצג
    }, 1500); // זמן הדיליי
  };
  const loadLessRecipes = () => {
    const decrement = 2; // Number of recipes to hide at a time

    if (visibleRecipes > 4) {
      setVisibleRecipes(visibleRecipes - decrement);
      // setIsLoadLessClicked(true)
    }
  };

  const imageClick = useRef();
  const [recipeName, setRecipeName] = useState("");
  const [recipeCount, setRecipeCount] = useState(null);
  const [recipeTime, setRecipeTime] = useState(null);
  const [countHeart, setCountHeart] = useState(0);

  const [inputsMitzrachim, setInputs] = useState([""]); // Initialize state with an array containing one empty string
  const [inputsOfen, setInputsOfen] = useState([""]); // Initialize state with an array containing one empty string
  const [inputsHearot, setInputsHearot] = useState([""]); // Initialize state with an array containing one empty string

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // החלק של האינפוטים

  // מצרכים
  const handleInputChange = (index, value) => {
    const updatedInputs = [...inputsMitzrachim];
    updatedInputs[index] = value;
    setInputs(updatedInputs);
    console.log(inputsMitzrachim, "inputs");
  };

  const handleAddInput = () => {
    setInputs([...inputsMitzrachim, ""]);
  };

  const handleRemoveInput = (index) => {
    const updatedInputs = [...inputsMitzrachim];
    updatedInputs.splice(index, 1);
    setInputs(updatedInputs);
  };

  // ofen
  const handleInputChangeOfen = (index, value) => {
    const updatedInputs = [...inputsOfen];
    updatedInputs[index] = value;
    setInputsOfen(updatedInputs);
    console.log(inputsOfen, "inputsOfen");
  };

  const handleAddInputOfen = () => {
    setInputsOfen([...inputsOfen, ""]);
  };

  const handleRemoveInputOfen = (index) => {
    const updatedInputs = [...inputsOfen];
    updatedInputs.splice(index, 1);
    setInputsOfen(updatedInputs);
  };

  // Hearot
  const handleInputChangeHearot = (index, value) => {
    const updatedInputs = [...inputsHearot];
    updatedInputs[index] = value;
    setInputsHearot(updatedInputs);
    console.log(inputsOfen, "inputsHearot");
  };

  const handleAddInputHearot = () => {
    setInputsHearot([...inputsHearot, ""]);
  };

  const handleRemoveInputHearot = (index) => {
    const updatedInputs = [...inputsHearot];
    updatedInputs.splice(index, 1);
    setInputsHearot(updatedInputs);
  };
  // סוף

  const openPopup = () => {
    setPopupOpen(true);
  };
  const closePopup = () => {
    // console.log('Closing popup');
    setPopupOpen(false);
    setSelectedImage(null);
    setInputs([""]);
    setInputsHearot([""]);
    setInputsOfen([""]);
  };

  // הוספת תמונה
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };
  // מיועד להחביא את תיבת האינפוט של העלאת התמונה
  const handleButtonClick = (e) => {
    e.preventDefault();
    imageClick.current.click();
  };

  // פונקציית הוספת המתכון
  const handleAddItem = () => {
    const newItem = {
      name: recipeName,
      image: selectedImage,
      path: "recipe",
      // titleRecipe: "עוגיות עבאדי תוצרת בית",
      count: recipeCount,
      ofenHachana: "אופן ההכנה",
      time: recipeTime,
      // forRecipe: "לבצק",
      Ingredients: inputsMitzrachim,
      making: inputsOfen,
      additionsTitle: "הערות  הארות",
      additions: inputsHearot,
    };
    console.log("dd");
    props.addItem(newItem);
    setPopupOpen(false);
    setInputs([""]);
    setInputsHearot([""]);
    setInputsOfen([""]);
  };

  return (
    <>
      <body className={categoryCss.body}>
        <div>
          {isPopupOpen && (
            <div
              className={`${categoryCss.popup} ${
                isPopupOpen ? "" : categoryCss.closed
              }`}
            >
              <div className={categoryCss.popupContent}>
                <img
                  src={logo}
                  style={{
                    display: "block",
                    margin: "auto",
                    paddingBottom: "1.2rem",
                  }}
                />
                <h2>הוספי מתכון חדש למבחר מתכוני {props.item[0].category}</h2>

                {/* טופס הוספת המתכון */}
                <form className={categoryCss.form}>
                  <div className={categoryCss.ConNameRecipe}>
                    <input
                      type="text"
                      onChange={(e) => setRecipeName(e.target.value)}
                    />
                    <label for="name">:שם המתכון</label>
                  </div>

                  {/* מספר מנות */}
                  <div className={categoryCss.Mitzrachim}>
                    <label htmlFor="name">:מספר מנות</label>
                    <input
                      type="text"
                      onChange={(e) => setRecipeCount(e.target.value)}
                    />
                  </div>

                  {/* זמן הכנה*/}
                  <div className={categoryCss.Mitzrachim}>
                    <label htmlFor="name">:זמן הכנה</label>
                    <input
                      type="text"
                      onChange={(e) => setRecipeTime(e.target.value)}
                    />
                  </div>

                  {/* מצרכים */}
                  <div className={categoryCss.Mitzrachim}>
                    <label htmlFor="name">:מצרכים</label>
                    {inputsMitzrachim.map((input, index) => (
                      <div className={categoryCss.inputIcon} key={index}>
                        <i
                          className="bx bx-trash"
                          onClick={() => handleRemoveInput(index)}
                        ></i>
                        <input
                          type="text"
                          value={input}
                          onChange={(e) =>
                            handleInputChange(index, e.target.value)
                          }
                        />
                      </div>
                    ))}
                    <button type="button" onClick={handleAddInput}>
                      +
                    </button>
                  </div>

                  {/* אופן הכנה */}
                  <div className={categoryCss.ofen}>
                    <label htmlFor="name">:אופן הכנה</label>
                    {inputsOfen.map((input, index) => (
                      <div className={categoryCss.inputIcon} key={index}>
                        <i
                          className="bx bx-trash"
                          onClick={() => handleRemoveInputOfen(index)}
                        ></i>
                        <input
                          type="text"
                          value={input}
                          onChange={(e) =>
                            handleInputChangeOfen(index, e.target.value)
                          }
                        />
                      </div>
                    ))}
                    <button type="button" onClick={handleAddInputOfen}>
                      +
                    </button>
                  </div>

                  {/* הערות והארות */}
                  <div className={categoryCss.hearot}>
                    <label htmlFor="name">הערות \ הארות</label>
                    {inputsHearot.map((input, index) => (
                      <div className={categoryCss.inputIcon} key={index}>
                        <i
                          className="bx bx-trash"
                          onClick={() => handleRemoveInputHearot(index)}
                        ></i>
                        <input
                          type="text"
                          value={input}
                          onChange={(e) =>
                            handleInputChangeHearot(index, e.target.value)
                          }
                        />
                      </div>
                    ))}
                    <button type="button" onClick={handleAddInputHearot}>
                      +
                    </button>
                  </div>

                  {/* הוספת תמונה  */}
                  <div className={categoryCss.uploadImage}>
                    <label for="name">תמונה של המתכון</label>

                    <input
                      type="file"
                      accept="image/*"
                      ref={imageClick}
                      onChange={handleImageChange}
                      style={{ display: "none" }}
                    />
                    <div
                      className={categoryCss.profileContainer}
                      onClick={handleButtonClick}
                    >
                      {selectedImage ? (
                        <img
                          className={categoryCss.profileImage}
                          src={selectedImage}
                          alt="Selected"
                        />
                      ) : (
                        <div className={categoryCss.placeholder}>
                          Upload Image
                        </div>
                      )}
                    </div>
                  </div>

                  {/* כפתורים */}
                  <div className={categoryCss.buttons}>
                    <button onClick={closePopup}>סגור</button>

                    <button type="button" onClick={handleAddItem}>
                      הוסף מתכון
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
        {/* <div className={categoryCss.containerAddRecipeBtn}>
            <button className={categoryCss.addRecipeBtn} onClick={openPopup}>
             הוספת מתכון
            </button>
          </div> */}
        <div className={categoryCss.logoCategory}>
          <img src={logo}/>
        </div>
        <div class={categoryCss.wrapper}>
          <a onClick={openPopup} className={categoryCss.a} href="#">
            <span>הוספת מתכון</span>
          </a>
        </div>
        <h1 className={categoryCss.h1}>{props.title}</h1>

        <h3 className={categoryCss.h3}>
          <NavLink className={categoryCss.navlinkHome} to="/home">
            דף בית
          </NavLink>
          <NavLink className={categoryCss.navlinkActive}>{props.title}</NavLink>
        </h3>

        <div className={categoryCss.container}>
          {props.item.slice(0, visibleRecipes).map((rec, index) => {
            return (
              <>
                <div className={categoryCss.containerImage}>
                  <i class="bx bxs-heart"></i>

                  <div className={categoryCss.imgageCon}>
                    <img src={rec.image} />
                  </div>
                  <p className={categoryCss.p}>{rec.name}</p>
                  <div className={categoryCss.timeRecipe}>
                    <span>זמן הכנה | {rec.time + " "} דקות </span>{" "}
                    <i class="bx bx-stopwatch"></i>
                  </div>

                  <Link to={rec.path} state={props.item[index]}>
                    <button className={categoryCss.recipeBtn}>
                      <i class="bx bx-left-arrow-alt"></i>למתכון
                    </button>
                  </Link>
                </div>
              </>
            );
          })}
        </div>

        <LoadMoreButton
          visibleItems={visibleRecipes}
          totalItems={props.item.length}
          onLoadMore={loadMoreRecipes}
          loadLessRecipes={loadLessRecipes}
          isLoading={isLoading}
        />
      </body>
    </>
  );
};

export default Category;
