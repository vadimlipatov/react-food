import { API_URL } from "./config";

const getMealById = async (id) => {
  const res = await fetch(`${API_URL}/lookup.php?i=${id}`);
  return await res.json();
};

const getAllCategories = () => {
  return fetch(API_URL + "/categories.php")
    .then((res) => res.json())
    .then((data) => data);
};

const getFilteredCategory = async (category) => {
  const res = await fetch(API_URL + "/filter.php?c=" + category);
  return await res.json();
};

export { getMealById, getAllCategories, getFilteredCategory };
