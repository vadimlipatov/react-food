import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFilteredCategory } from "../api";
import MealList from "../components/MealList";
import Preloader from "../components/Preloader";

const Category = () => {
  const [meals, setMeals] = useState([]);

  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getFilteredCategory(name).then((data) => {
      setMeals(data.meals);
    });
  }, [name]);

  return (
    <>
      <button className="btn teal" onClick={() => navigate(-1)}>
        <i className="material-icons left">arrow_back</i>
        Go back
      </button>
      {!meals.length ? (
        <Preloader />
      ) : (
        <MealList catName={name} meals={meals} />
      )}
    </>
  );
};

export default Category;
