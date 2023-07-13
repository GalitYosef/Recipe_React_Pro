import React from 'react'
import Category from '../../Category/Category'


import pistachio from '../../../assets/recipeImages/bchoshot/pistachio_cake-s.jpg'
import vanilla from '../../../assets/recipeImages/bchoshot/vanilla_birthday_cake-s-2.jpg'
import shkedim from '../../../assets/recipeImages/bchoshot/almond_chocolate_cake-s-2.jpg'
import meypel from '../../../assets/recipeImages/bchoshot/maple_tahini_cake6-s.jpg'
import coffee from '../../../assets/recipeImages/bchoshot/coffee_chiffon_cake-s-2.jpg'

const Bchoshot = () => {
    //מידע על מתכון
    const infoBchoshot = [
      {
        name: "עוגת פיסטוק בחושה",
        image: pistachio,
        path:'recipe'
      },
     
      {
        name: "עוגת וניל עם סוכריות ליום הולדת",
        image: vanilla,
        path:'recipe'
      },
      {
        name: "עוגת שוקולד ושקדים",
        image: shkedim,
        path:'recipe'
      },
      {
        name: "עוגת מייפל וטחינה",
        image: meypel,
        path:'recipe'
      },
      {
        name: "עוגת שיפון קפה",
        image: coffee,
        path:'recipe'
      },
    ];
  return (
    <>
      <div>
      <Category item={infoBchoshot} title="עוגות בחושות" />
    </div>
    </>
  )
}

export default Bchoshot