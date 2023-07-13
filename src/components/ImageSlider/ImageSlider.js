import React, { useState, useEffect, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import Carousel from "react-simply-carousel";

// import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import pic1 from '../../assets/recipeImages/Pai/brownies_pie2-s.jpg'
import pic2 from '../../assets/recipeImages/bchoshot/maple_tahini_cake6-s.jpg'
import pic3 from '../../assets/recipeImages/bchoshot/coffee_chiffon_cake-s-2.jpg'
import pic4 from '../../assets/recipeImages/Pai/brownies_pie2-s.jpg'
import pic5 from '../../assets/recipeImages/bchoshot/maple_tahini_cake6-s.jpg'
import pic6 from '../../assets/recipeImages/bchoshot/coffee_chiffon_cake-s-2.jpg'
import pic7 from '../../assets/recipeImages/Pai/brownies_pie2-s.jpg'
import pic8 from '../../assets/recipeImages/bchoshot/maple_tahini_cake6-s.jpg'
import pic9 from '../../assets/recipeImages/bchoshot/coffee_chiffon_cake-s-2.jpg'
import pic10 from '../../assets/recipeImages/bchoshot/coffee_chiffon_cake-s-2.jpg'


import imagesSlide from './imageSlider.module.css';

const ImageSlider = () => {
  // const [activeSlide, setActiveSlide] = useState(0);

  const imagesSlider =[pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic9,pic10]
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState([]);
  const [visibleImages, setVisibleImages] = useState([]);

  useEffect(() => {

    setImages(imagesSlider);
    setVisibleImages(imagesSlider.slice(0, 4));
  }, []);

  const goToNextSlide = () => {
    const newIndex = currentSlide + 1;

    setCurrentSlide(newIndex < images.length ? newIndex : 0);
    setVisibleImages(images.slice(newIndex, newIndex + 4));
  };

  const goToPreviousSlide = () => {
    const newIndex = currentSlide - 1;
    
    setCurrentSlide(newIndex== 0 ? newIndex : images.length - 1);
    setVisibleImages(images.slice(1, newIndex + 2));
  };

  return (
  
  <>
    <div className={imagesSlide.imageSlider}>
      <button className={imagesSlide.prevButton} onClick={goToPreviousSlide}>
        &#8249;
      </button>
      <div className={imagesSlide.imageContainer}>
        {visibleImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slider Image ${index}`}
            className={imagesSlide.sliderImage}
          />
        ))}
      </div>
      <button className={imagesSlide.nextButton} onClick={goToNextSlide}>
        &#8250;
      </button>
    </div>
    </>
  );
};

export default ImageSlider;

