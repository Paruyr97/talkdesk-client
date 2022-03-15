import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./data.css";
import Categories from "../categories/categories";
import Items from "../items/items";
import Pagination from "../pagination/pagination";
import Search from "../search/search";
import { getDataByCategory, getDataByPage } from "../../helpers/helper";
import { pagesCount } from "../../constants";

export default function App() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(
    Number(location.pathname.slice(1)) || 1
  );
  const [searchApp, setSearchApp] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentData, setCurrentData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [dataLength, setDataLength] = useState(0);

  useEffect(() => {
    loadData();
  }, [selectedCategory, currentPage]);

  const loadData = () => {
    if (location.pathname.includes("category")) {
      getDataByCategory(location.pathname).then(setCurrentData);
    } else if (Number(location.pathname.slice(1)) || !selectedCategory) {
      getDataByPage(location.pathname === "/" ? "/1" : location.pathname).then(
        (result) => {
          setDataLength(result.dataLength);
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
        setDataLength={setDataLength}
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
        <Items data={filteredData.length ? filteredData : currentData} />
        {dataLength > pagesCount ? (
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            dataLength={dataLength}
          />
        ) : (
          ""
        )}
      </section>
    </div>
  );
}
