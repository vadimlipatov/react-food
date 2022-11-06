import React, { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { getAllCategories } from "../api";
import CategoryList from "../components/CategoryList";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const Home = () => {
  //catalog = categories
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(data.categories);
    });
  }, []);

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) => {
        return item.strCategory.toLowerCase().includes(str.toLowerCase());
      })
    );
    if (!str) {
      searchParams.delete("search");
      // 👇️ update state after
      setSearchParams(searchParams);
    } else {
      setSearchParams({ search: str });
    }
  };

  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? (
        <Preloader />
      ) : (
        <>
          {!filteredCatalog.length ? (
            <h5>No results found</h5>
          ) : (
            <CategoryList catalog={filteredCatalog} />
          )}
        </>
      )}
    </>
  );
};

export default Home;
