import React, { useState, useEffect } from "react";
import { styles } from "../../styles";
import Marquee from "react-fast-marquee";

const List = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Updated URL
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        setData(result);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) return <div className={`${styles.flexCenter} ${styles.heading2} overflow-hidden min-h-screen text-white`}>Error: {error.message}</div>;


  return (
    <>
      {loading ? (
        <div className={`h-screen w-full ${styles.flexCenter}`}>
          <span className="loader"></span>
        </div>
      ) : (
        <div
          className={`${styles.paddingY} ${styles.flexCenter} flex-col  w-full`}
        >
          {/* <Marquee autoFill="true" speed="180" className={`${styles.flexCenter}`}>
             */}
             <div className={` ${styles.paddingY} ${styles.flexCenter} text-center`}>
              <h2 className={`${styles.heading2} font-Roboto  text-[3.6rem] `}>Banquet of Savory & <br /> <span className={`${styles.heading4} leading-[1]`}>Delicious Offerings</span>
              </h2>
             </div>
             <div className={`${styles.flexCenter} flex-wrap`}>
              {data?.categories?.filter((category) => category.idCategory < 6).map((category, index) => (
                <div
                  key={index}
                  className={`flex hover:scale-105 hover:skew-x-2  transition duration-[900ms]  ease-in-out justify-start items-center overflow-hidden relative bg-shade1 hover:bg-[#545679] hover:bg-gradient-to-tr hover:from-shade1 hover:to-[#212235] flex-col rounded-xl w-full h-[24rem] max-w-[30%] p-9 m-5`}
                >
              
              <div className={`w-[40rem] h-[9rem] blur-3xl z-0 absolute -top-[5rem]  bg-[#2e2f4a] `} />
                  <p className={`${styles.heading3} absolute`}>{category.strCategory}</p>
                  <img
                    src={category.strCategoryThumb}
                    className={`rounded-full h-[8rem] mt-[4rem] my-[2rem]`}
                    alt={`Image for ${category.strCategory}`}
                  />
                  <p className={`${styles.text2 }`}>{category.strCategoryDescription.slice(0, 100)  + "..."}</p>
                </div>
              ))}</div>
          {/* </Marquee> */}
        </div>
      )}
    </>
  );
};

export default List;