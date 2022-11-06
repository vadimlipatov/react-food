import React from "react";
import Meal from "./Meal";

const MealList = ({ meals, catName }) => {
  return (
    <div className="list">
      {meals.map((meal) => {
        return <Meal catName={catName} key={meal.idMeal} {...meal} />;
      })}
    </div>
  );
};

export default MealList;
