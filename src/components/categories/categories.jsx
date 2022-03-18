import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { active, _category } from "../../constants";
import { activateCategory, getCategories, removeActiveClass } from "../../helpers/helper";

export default function Categories({
  selectedCategory,
  setSelectedCategory,
  setSearchApp,
  setFilteredData,
  setPagesCount,
}) {
  const listRef = useRef(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  useEffect(() => {
    activateCategory(window.location.pathname);
  }, [categories]);

  const handleCategoryClick = (category) => () => {
    removeActiveClass(listRef.current);
    setSearchApp("");
    setPagesCount(0);
    setFilteredData([]);
    if (category === selectedCategory) {
      setSelectedCategory("");
      window.location.replace("/");
      return;
    }
    setSelectedCategory(category);
  };

  const getIsActive = (category) => {
    return selectedCategory === category ? active : "";
  };

  return (
    <nav className="nav-categories">
      <h2>Categories</h2>
      <ul className="nav-menu" ref={listRef}>
        {categories.map((category, idx) => {
          return (
            <li
              key={idx}
              id={category}
              onClick={handleCategoryClick(category)}
              className={getIsActive(category)}
            >
              <Link to={`${_category}/${category}`}>{category}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
