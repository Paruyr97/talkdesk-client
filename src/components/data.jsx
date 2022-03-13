import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './data.css';
import Categories from "./categories/categories";
import Items from "./items/items";
import Pagination from "./pagination/pagination";
import Search from "./search/search";
import { getDataByCategory, getDataByPage } from "../helpers/helper";

export default function Test() {
  
    const location = useLocation();
    const page = Number(location.pathname.slice(1)) || 1;
    const [currentPage, setCurrentPage] = useState(page);
    const [currentPageData, setCurrentPageData] = useState([]);
    const [filteredDataBySearch, setFilteredDataBySearch] = useState([]);
    const [filteredDataByCategory, setFilteredDataByCategory] = useState([]);
    const [searchApp, setSearchApp] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        getDataByPage(page).then(setCurrentPageData);
    }, [currentPage, page]);

    useEffect(() => {
       getDataByCategory(selectedCategory).then(setFilteredDataByCategory);
    }, [selectedCategory]);

    const getData = () => {
        if (searchApp) {
          return filteredDataBySearch;
        } else if (selectedCategory) {
          return filteredDataByCategory;
        }

        return currentPageData;
    }

    return (
        <div className="flex-container">
            <Categories 
              selectedCategory={selectedCategory} 
              setSelectedCategory={setSelectedCategory}
              setSearchApp={setSearchApp} />
            <section className="apps-list">
                <Search 
                  setFilteredDataBySearch={setFilteredDataBySearch}
                  searchApp={searchApp}
                  setSearchApp={setSearchApp} />
                <Items data={getData()} />
                { 
                  !(searchApp || selectedCategory)
                   ? <Pagination 
                    currentPage={currentPage} 
                    setCurrentPage={setCurrentPage} />
                   : ''
                }
            </section>
        </div>
    )
}
