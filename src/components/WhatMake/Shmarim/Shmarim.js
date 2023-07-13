import React from 'react'
import Category from '../../Category/Category'

import spirala from '../../../assets/recipeImages/shmarim/chocolate_braid.jpeg'
import malabi from '../../../assets/recipeImages/shmarim/malabi_braid2-s-1.jpg'
import poppy_seeds_peanut_butter_and_chocolate_braided_danish from '../../../assets/recipeImages/shmarim/poppy_seeds_peanut_butter_and_chocolate_braided_danish_cake2-s-1-1024x1536.jpg'
import modern from '../../../assets/recipeImages/shmarim/modern_chocolate_babka-s-1-1024x1536.jpg'
import botnim from '../../../assets/recipeImages/shmarim/peanut_butter_chocolate_babka3-s.jpg'


const Shmarim = () => {

   //מידע על מתכון
   const infoShmarim = [
    {
      name: "עוגת שמרים ספירלה במילוי דאבל שוקולד",
      image: spirala,
      path:'recipe'
    },
   
    {
      name: "צמת שמרים מלבי",
      image: malabi,
      path:'recipe'
    },
    {
      name: "עוגת שמרים פרג, חמאת בוטנים ושוקולד",
      image: poppy_seeds_peanut_butter_and_chocolate_braided_danish,
      path:'recipe'
    },
    {
      name: "עוגת שמרים שוקולד בעיצוב מודרני",
      image: modern,
      path:'recipe'
    },
    {
      name: "עוגת שמרים במילוי שוקולד וחמאת בוטנים",
      image: botnim,
      path:'recipe'
    },
  ];
  return (
    <div>
      <Category item={infoShmarim} title="עוגות שמרים" />
    </div>
  )
}

export default Shmarim