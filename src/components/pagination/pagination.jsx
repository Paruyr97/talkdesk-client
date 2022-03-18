import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  active,
  decrement,
  disabled,
  increment,
  maxPagesCount,
} from "../../constants";

export default function Pagination({
  currentPage,
  setCurrentPage,
  pagesCount,
}) {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    setPages(getPages());
  }, [currentPage]);

  const getPages = () => {
    const size = pagesCount < maxPagesCount ? pagesCount : maxPagesCount;
    const pages = Array(size)
      .fill()
      .map((_, i) => {
        if (currentPage === 1) {
          return currentPage + i;
        } else if (currentPage === pagesCount) {
          return currentPage + (i + 1) - size;
        } else {
          return currentPage + (i - 1);
        }
      });

    return pages;
  };

  const changePage = (value) => () => {
    if (currentPage === value) {
      return;
    } else if (value === decrement) {
      return currentPage > 1 && setCurrentPage(currentPage - 1);
    } else if (value === increment) {
      return currentPage < pagesCount && setCurrentPage(currentPage + 1);
    }
    value >= 1 && value <= pagesCount && setCurrentPage(value);
  };

  return (
    <ul className="pagination">
      <li
        onClick={changePage(decrement)}
        style={currentPage === 1 ? disabled : {}}
      >
        <Link to={`/${currentPage - 1 || currentPage}`}>&lt;</Link>
      </li>
      {pages.map((page, idx) => {
        return (
          <li
            key={idx}
            onClick={changePage(page)}
            className={currentPage === page ? active : ""}
          >
            <Link to={`/${page}`}>{page}</Link>
          </li>
        );
      })}
      <li
        onClick={changePage(increment)}
        style={currentPage === pagesCount ? disabled : {}}
      >
        <Link
          to={`/${currentPage === pagesCount ? currentPage : currentPage + 1}`}
        >
          &gt;
        </Link>
      </li>
    </ul>
  );
}
