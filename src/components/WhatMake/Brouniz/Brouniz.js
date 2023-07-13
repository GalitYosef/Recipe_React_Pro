import React, { useEffect, useState } from "react";
import Category from "../../Category/Category";
import brounizTchina from "../../../assets/recipeImages/brounizTchina.jpeg";
import berryBrouniz from "../../../assets/recipeImages/berry_brownies.jpeg";
import pretzel_white_chocolate_brownies from "../../../assets/recipeImages/pretzel_white_chocolate_brownies-s.jpg";
import nutella_brownies4 from "../../../assets/recipeImages/nutella_brownies4-s.jpg";
import chocolate_chip_cookie_brownies from "../../../assets/recipeImages/chocolate_chip_cookie_brownies-s-1.jpg";
import brounizCss from "./brouniz.module.css";

const Brouniz = () => {

  const [itemsBrouniz, setItems] = useState([]);
  const addItem = (newItem) => {
    setItems([...itemsBrouniz, newItem]);
  };
  //מידע על מתכון
  const infoBrouniz = [
    {
      name: "בראוניז שוקולד וטחינה עם שקדים",
      image: brounizTchina,
      path: "recipe",
      category:'בראוניז ובלונדיס',
      time:'30',
      additionsTitle:'הערות \ הארות', 
      ofenHachana:'אופן ההכנה',

    },
    {
      name: "בראוניז שוקולד ופירות יער",
      image: berryBrouniz,
      path: "recipe",
      category:'בראוניז ובלונדיס',
      time:'25',
      additionsTitle:'הערות \ הארות', 
      ofenHachana:'אופן ההכנה',

    },
    {
      name: "בראוניז עם בייגלה ושוקולד לבן",
      image: pretzel_white_chocolate_brownies,
      path: "recipe",
      category:'בראוניז ובלונדיס',
      time:'35',
      additionsTitle:'הערות \ הארות', 
      ofenHachana:'אופן ההכנה',

    },
    {
      name: "בראוניז נוטלה ואגוזי לוז",
      image: nutella_brownies4,
      path: "recipe",
      category:'בראוניז ובלונדיס',
      time:'20',
      additionsTitle:'הערות \ הארות', 
      ofenHachana:'אופן ההכנה',

    },
    {
      name: "בראוניז עוגיות שוקולד צ’יפס",
      image: chocolate_chip_cookie_brownies,
      path: "recipe",
      category:'בראוניז ובלונדיס',
      time:'15',
      additionsTitle:'הערות \ הארות', 
      ofenHachana:'אופן ההכנה',
    },
  ];

  useEffect(() => {
    setItems(infoBrouniz);
  },[]);


  return (
    <div>
      <Category item={itemsBrouniz} addItem={addItem} title="בראוניז ובלונדיס" />
    </div>
  );
};

export default Brouniz;
