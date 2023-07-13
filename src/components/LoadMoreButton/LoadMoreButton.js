import React , {useState}from "react";
import LoadCss from './LoadMoreButton.module.css'
const LoadMoreButton = ({ visibleItems, totalItems, onLoadMore ,loadLessRecipes ,isLoading}) => {


  return (
    <>
      {visibleItems < totalItems ? (
        <div className={LoadCss.moreBtnContainer}>
        <button onClick={onLoadMore} className={isLoading?`${LoadCss.spinBtn}`:`${LoadCss.moreBtn}`}>
        {isLoading ? (
          // אייקון של טעינה
            <i className="bx bx-loader bx-spin"></i>
          ) : (
            ' מתכונים נוספים'
        )}
        </button>
        </div>
        // כאשר מוצגים מעל 4 מתכונים אז כפתור הפחות יוצג
      ): visibleItems > 4 ?<>
       <div className={LoadCss.moreBtnContainer}>
        <button onClick={loadLessRecipes} className={LoadCss.moreBtn}>
          פחות
        </button>
        </div>
      </>:""}
    </>
  );
};

export default LoadMoreButton;