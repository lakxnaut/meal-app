import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import classes from "./Meal.module.css";

const SingleMeal = (props) => {

    const [mealData, setMealData] = useState(null);

    const { state } = useLocation();
    function getMealData() {
        console.log(state.id)
        let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${state.id}`;

        const resp = axios(url).then((resp) => setMealData(resp.data.meals));




    }


    useEffect(() => {
        console.log("hello");
        getMealData()

    }, []);

    console.log(mealData)

    return (
        <div className={classes.SingleMeal}>
            {!mealData && (<div>hello</div>)}
            {mealData && (mealData.map((item) => {
                return (
                    <div key={item.idMeal}>
                        <h1>{item.idMeal}</h1>
                        <img src={item.strMealThumb} alt="" />
                        <p>Instructions : {item.strInstructions}</p>
                        <div className={classes.indegredents}>
                            <h3>
                                {item.strIngredient1}
                            </h3>
                            <h3>
                                {item.strIngredient2}
                            </h3>
                            <h3>
                                {item.strIngredient3}
                            </h3>
                            <h3>
                                {item.strIngredient4}
                            </h3>
                        </div>
                    </div>
                );
            }))}
        </div>
    )
}

export default SingleMeal