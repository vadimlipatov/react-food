import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../api";
import Preloader from "../components/Preloader";

const MealDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getMealById(id).then((data) => {
      setRecipe(data.meals[0]);
    });
  }, [id]);

  const {
    strMealThumb,
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strYoutube,
  } = recipe;
  return (
    <>
      {!recipe.strMeal ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <img
            className="responsive-img"
            width={600}
            src={strMealThumb}
            alt={strMeal}
          />
          <h1>{strMeal}</h1>
          <hr />
          <h5>
            Category: <b>{strCategory}</b>
          </h5>
          {strArea && (
            <h6>
              Area: <i>{strArea}</i>
            </h6>
          )}
          <hr />
          <p>{strInstructions}</p>
          <table className="centered">
            <thead>
              <tr>
                <th>No</th>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>

            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes("strIngredient") && recipe[key]) {
                  let i = key.slice(13);
                  return (
                    <tr key={key}>
                      <td>{i}</td>
                      <td>{recipe[key]}</td>
                      <td>{recipe[`strMeasure${i}`] || "-"}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>

          <br />
          {strYoutube && (
            <div className="row">
              <h4>Video Recipe:</h4>
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`}
                  title={strMeal}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      )}
      <br />
      <button className="btn teal" onClick={() => navigate(-1)}>
        <i className="material-icons left">arrow_back</i>
        Go back
      </button>
    </>
  );
};

export default MealDetails;
