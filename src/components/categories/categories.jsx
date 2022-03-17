import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { active, _category } from "../../constants";
import { activateCategory, getCategories, removeActiveClass } from "../../helpers/helper";

export default function Categories({
  selectedCategory,
  setSelectedCategory,
  setSearchApp,
  setFilteredData,
  setDataLength,
}) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  useEffect(() => {
    activateCategory(window.location);
  }, [categories, window.location]);

  const handleCategoryClick = (category) => () => {
    removeActiveClass();
    setSearchApp("");
    setDataLength(0);
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
      <ul className="nav-menu">
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
