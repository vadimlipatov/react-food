import React from "react";
import CategoryItem from "./CategoryItem";

const CategoryList = (props) => {
  const { catalog = [] } = props;

  return (
    <>
      <div className="list">
        {catalog.map((category) => {
          return <CategoryItem key={category.idCategory} {...category} />;
        })}
      </div>
    </>
  );
};

export default CategoryList;
