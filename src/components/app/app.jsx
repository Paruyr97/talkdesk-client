import { useEffect, useState } from "react";
import "./data.css";
import Categories from "../categories/categories";
import Items from "../items/items";
import Pagination from "../pagination/pagination";
import Search from "../search/search";
import { getDataByCategory, getDataByPage } from "../../helpers/helper";

export default function App() {
  const [currentPage, setCurrentPage] = useState(
    Number(window.location.pathname.slice(1)) || 1
  );
  const [searchApp, setSearchApp] = useState("");
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
      getDataByPage(window.location.pathname === "/" ? "/1" : window.location.pathname).then(
        (result) => {
          setPagesCount(result.dataLength);
          setCurrentData(result.data);
        }
      );
    }
  };

  return (
    <div className="flex-container">
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setSearchApp={setSearchApp}
        setFilteredData={setFilteredData}
        setPagesCount={setPagesCount}
      />
      <section className="apps-list">
        <Search
          currentData={currentData}
          setCurrentData={setCurrentData}
          searchApp={searchApp}
          setSearchApp={setSearchApp}
          setFilteredData={setFilteredData}
          filteredData={filteredData}
        />
        <Items data={searchApp ? filteredData : currentData} />
        {pagesCount > 1 && !searchApp ? (
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
