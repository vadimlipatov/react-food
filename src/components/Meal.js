import React from "react";
import { Link } from "react-router-dom";

const Meal = (props) => {
  const { idMeal, strMealThumb, strMeal, catName } = props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="card-content">
        <span className="card-title">{strMeal}</span>
        <p>id: {idMeal}</p>
      </div>
      <div className="card-action">
        <Link to={`/${catName}/${idMeal}`} className="btn">
          watch details
        </Link>
      </div>
    </div>
  );
};

export default Meal;
