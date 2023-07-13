import React from "react";
import jarCss from "./jar.module.css";
import { Link } from "react-router-dom";

// תמונות
import pic1 from "../../assets/whatMake/sweetTivoni.jpeg";
import pic2 from "../../assets/jar/chocolate_chip.jpeg";
import pic3 from "../../assets/jar/lemon_crinkle.jpeg";
import pic4 from "../../assets/jar/abadi.jpeg";
import Recipe from "../Recipe/Recipe";

const Jar = () => {
  const frontName = [
    {
      name: "סופלה שוקולד",
      image: pic1,
      path: "recipe",
    },
    {
      name: "עוגיות שוקולד צ׳יפס",
      image: pic2,
      path: "recipe",
    },
    {
      name: "עוגיות לימון מתפוצצות",
      image: pic3,
      path: "recipe",
    },

    {
      name: "עוגיות עבאדי",
      image: pic4,
      path: "recipe",
      titleRecipe: "עוגיות עבאדי תוצרת בית",
      count: "עוגיות 15-20",
      ofenHachana: "אופן ההכנה",
      forRecipe: "לבצק",
      Ingredients: [
        "140 גרם (1 כוס) קמח",
        "1 כפית אבקת אפייה",
        "חצי כפית מלח",
        "30 גרם שומשום",
        "60 מ״ל (רבע כוס) שמן",
        "60 מ״ל (רבע כוס) מים",
      ],
      making: [
        "בקערה שמים קמח, אבקת אפייה, מלח, שומשום, שמן ומים ומערבבים בעזרת כף עד לקבלת בצק אחיד ודי שומני.",
        "מעבירים את הבצק למשטח עבודה מקומח קלות ומעבדים עוד כמה רגעים עד שהוא אחיד ונוח לעבודה. אם הבצק דביק מדי – מוסיפים מעט קמח.",
        "מחלקים את הבצק ל-4 חלקים ומגלגלים כל פיסת בצק לרצועה ארוכה ודקה.",
        "חותכים לרצועות קצרות באורך 8-10 ס”מ וסוגרים לצורת עיגול. מניחים על גבי תבנית עם נייר אפייה.",
        "חוזרים על הפעולה עם כל הבצק ליצירת כל העוגיות.",
        "מחממים תנור ל-180 מעלות.",
        "אופים את העוגיות במשך 15-25 דקות או עד הזהבה עמוקה.",
        "מצננים לחלוטין בטמפרטורת החדר ושומרים בצנצנת אטומה.",
      ],
      additionsTitle: "הערות, הארות ותוספות",
      additions: [
        "גרסה ללא גלוטן: משתמשים בקמח כרגיל באותה כמות במקום הקמח הלבן",
        "גרסה קצת יותר בריאה: משתמשים בקמח מלא או קמח כוסמין במקום הקמח הלבן באותה כמות. יכול להיות שיהיה צורך להוסיף טיפה נוזלים כדי שהבצק לא יהיה יבש מדי.",
        "לעוגיות בטעם זעתר: מוסיפים כפית זעתר יבש לבצק.",
        "לעוגיות חריפות: מוסיפים ½ כפית צ’ילי גרוס לבצק.",
        "במקום שומשום רגיל אפשר להשתמש בשומשום מלא או שחור או אפילו קצח לגיוון טעמים.",
        "העוגיות נשמרות בצנצנת אטומה עד 10 ימים.",
      ],
    },
  ];

  return (
    <div className={jarCss.containerJar}>
      {frontName.map((item) => {
        return (
          <>
            <div className={jarCss.category}>
              <img src={item.image} alt="dd" />
              <div className={jarCss.containerP}>
                <Link to={item.path} state={item}>
                  <p className={jarCss.name}>{item.name}</p>
                </Link>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Jar;
