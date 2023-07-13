import React from 'react'
import basicOfBaking from './basicOfBaking.module.css'
import pic1 from '../../assets/yesodot/kitchen.jpg'
import { Link } from 'react-router-dom'
import ImageSlider from '../ImageSlider/ImageSlider'


const BasicOfBaking = () => {
  return (
    <>
    
    <div className={basicOfBaking.container}>

        <div className={basicOfBaking.imageContainer}>
            <img src={pic1} alt='g'/>
            {/* <ImageSlider/> */}
        </div>

        <div className={basicOfBaking.parContainer}>
            <h1>יסודות האפייה</h1>
            <p>  
מקום אחד שמרכז את כל הטיפים והמתכונים הכי פשוטים – החל ממתכוני בסיס כמו איך מכינים בצק פריך, מוס שוקולד הכי קל בעולם מ-2 מצרכים ועד לתשובות לכל השאלות הכי נפוצות בעולם האפייה והמתוקים      </p>
        
        <Link className={basicOfBaking.startBake} >
        
        <i class='bx bxs-cookie'></i> מתחילים לאפות

        </Link>
        </div>
    </div>
    </>
  )
}

export default BasicOfBaking