import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Meal.module.css";

const Meal = () => {
  const [mealData, setMealData] = useState(null);
  const navigate = useNavigate();

  function getData() {
    const resp = axios(
      "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
    ).then((resp) => setMealData(resp.data.meals));
  }

  useEffect(() => {
    getData();
  }, []);

  function onSingleHandler(id) {
    navigate("/singlemeal", { state: { id } });
  }
  return (
    <div className={classes.AllMeals}>
      {!mealData && <div>Hello</div>}
      {mealData &&
        mealData.map((item) => {
          return (
            <div
              key={item.idMeal}
              onClick={() => {
                onSingleHandler(item.idMeal);
              }}
            >
              <h1>{item.idMeal}</h1>
              <img src={item.strMealThumb} alt="" />
            </div>
          );
        })}
    </div>
  );
};

export default Meal;
