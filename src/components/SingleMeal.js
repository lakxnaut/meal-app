import React, { useEffect, useState } from 'react'
// import { useNavigate, useLocation } from 'react-router-dom'

const SingleMeal = (props) => {

    const [mealData, setMealData] = useState();
    // const navigate = useNavigate()

    // const { state } = useLocation();
    async function getMealData() {
        // let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${state.id}`;

        // const resp = await fetch(url);
        // const data = await resp.json();
        // setMealData(resp.data.meals)
    }


    useEffect(() => {
        console.log("hello");
        getMealData()

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
    )
}

export default SingleMeal