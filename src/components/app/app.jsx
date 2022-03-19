import { useEffect, useState } from "react";

import "./app.css";
import Categories from "../categories/categories";
import Items from "../items/items";
import Pagination from "../pagination/pagination";
import Search from "../search/search";
import { getDataByCategory, getDataByPage } from "../../helpers/helper";

export default function App() {
  const [currentPage, setCurrentPage] = useState(
    Number(window.location.pathname.slice(1)) || 1
  );
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentData, setCurrentData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [pagesCount, setPagesCount] = useState(0);

  useEffect(() => {
    loadData();
  }, [selectedCategory, currentPage]);

  const loadData = () => {
    if (window.location.pathname.includes("category")) {
      getDataByCategory(window.location.pathname).then(setCurrentData);
    } else if (Number(window.location.pathname.slice(1)) || !selectedCategory) {
      getDataByPage(
        window.location.pathname === "/" ? "/1" : window.location.pathname
      ).then((result) => {
        setPagesCount(result.pagesCount);
        setCurrentData(result.data);
      });
    }
  };

  return (
    <div className="flex-container">
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setSearchValue={setSearchValue}
        setFilteredData={setFilteredData}
        setPagesCount={setPagesCount}
      />
      <section className="apps-list">
        <Search
          currentData={currentData}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setFilteredData={setFilteredData}
        />
        <Items data={searchValue ? filteredData : currentData} />
        {pagesCount > 1 && !searchValue ? (
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pagesCount={pagesCount}
          />
        ) : (
          ""
        )}
      </section>
    </div>
  );
}
