import React from 'react'
import Category from '../../Category/Category'

import cherry_almond_chocolate_tart from '../../../assets/recipeImages/Pai/cherry_almond_chocolate_tart.jpeg'
import pretzel_chocolate_pie from '../../../assets/recipeImages/Pai/pretzel_chocolate_pie-s-1.jpg'
import apple_cheesecake_streusel from '../../../assets/recipeImages/Pai/apple_cheesecake_streusel_pie8-s.jpg'
import almond_chocolate_banana from '../../../assets/recipeImages/Pai/almond_chocolate_banana_pie4-s-2.jpg'
import braunizpai from '../../../assets/recipeImages/Pai/brownies_pie2-s.jpg'


const Pai = () => {
  //מידע על מתכון
  const infoPai = [
    {
      name: "טארט שוקולד עם שקדים ודובדבנים",
      image: cherry_almond_chocolate_tart,
      path:'recipe'
    },
   
    {
      name: "טארט גבינה ותפוחים",
      image: apple_cheesecake_streusel,
      path:'recipe'
    },
    {
      name: "פאי בננות ושקדים עם קרם שוקולד",
      image: almond_chocolate_banana,
      path:'recipe'
    },
    {
      name: "פאי בראוניז",
      image: braunizpai,
      path:'recipe'
    },
    {
      name: "פאי שוקולד ובייגלה מלוח",
      image: pretzel_chocolate_pie,
      path:'recipe'
    },
  ];
  return (
    <div>
      <Category item={infoPai} title="פאי וטארט" />
    </div>
  );
};

export default Pai;
