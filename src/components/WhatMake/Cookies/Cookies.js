import React from 'react'
import Category from '../../Category/Category'

import botnim from '../../../assets/recipeImages/cookies/peanut_butter_chocolate_cip_bars5-s.jpg'
import choclatePhistok from '../../../assets/recipeImages/cookies/Pistachio_chocolate_Chip_cookies2-s.jpg'
import crecerCookie from '../../../assets/recipeImages/cookies/cracker_butter.jpeg'
import chocolate_sandwich from '../../../assets/recipeImages/cookies/double_chocolate_sandwich_cookies-s-2.jpg'
import pistachio_chocolate_cookies from '../../../assets/recipeImages/cookies/pistachio_chocolate_cookies3-s.jpg'

const Cookies = () => {
     //מידע על מתכון
     const infoBrouniz =[{
      name:'ריבועי חמאת בוטנים ושוקולד',
      image:botnim,
      path:'recipe'
  },
  {
      name:'עוגיות שוקולד צ׳יפס עם פיסטוקים ושקדים',
      image:choclatePhistok,
      path:'recipe'
  },
  {
      name:'עוגיות קרקר מתוקות',
      image:crecerCookie,
      path:'recipe'
  },
  {
      name:'עוגיות סנדוויץ’ שוקולד',
      image:chocolate_sandwich,
      path:'recipe'
  },
  {
      name:'עוגיות שוקולד ופיסטוק',
      image:pistachio_chocolate_cookies,
      path:'recipe'
  },
  
  
];
  return (
    <div >
        <Category item={infoBrouniz} title='עוגיות וחיתוכיות'/>
    </div>
  )
}

export default Cookies