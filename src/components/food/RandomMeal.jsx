import React, { useState, useEffect } from "react";
import { styles } from "../../styles";

const RandomMeal = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const url = "https://www.themealdb.com/api/json/v1/1/random.php";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json(); // Changed to response.json() to get JSON data
        setData(result);
        console.log(data);
      } catch (err) {
        console.error(err);
        setError(err);
      }
    };

    fetchData();
  }, []);
  if (error) return <div className={`${styles.flexCenter} ${styles.heading2} overflow-hidden min-h-screen text-white`}>Error: {error.message}</div>;

  return (
    <>
      <div className={`h-full w-full flex flex-row`}>
        <div className={`bg-gradient-to-tr from-shade1 to-shade4 w-full rounded-3xl shadow-2xl ${styles.paddingX} ${styles.paddingY}  `}>
          {data?.meals?.map((meal, index) => (
            <div key={index} className={`${styles.flexCenter} items-center`}>
              <div className={`basis-[50%]`}>
                <h4 className={`${styles.heading3}`}>{meal.strCategory}</h4>
                <h2 className={`${styles.heading2}`}>{meal.strMeal}</h2>
                <p className={`${styles.text2}`}>Pouplar in {meal.strArea}</p>
                <p className={`${styles.text2}`}>Key Ingredients: {meal.strIngredient4}</p>
                {/* <p className={`${styles.text}`}>{meal.strInstructions}</p> */}
              </div>
              <div  className={`basis-[40%] ml-4`}>
                <img src={meal.strMealThumb} className={`rounded-full shadow-2xl `} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RandomMeal;
