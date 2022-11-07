import axios from "axios";
import React, { useEffect, useState } from "react";

const Meal = () => {
  const [mealData, setMealData] = useState();

  function getData() {
    const resp = axios(
      "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
    ).then((resp) => setMealData(resp.data.meals));
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {mealData.map((item) => {
        return (
          <div>
            <h1>{item.idMeal}</h1>
            <img src={item.strMealThumb} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Meal;
