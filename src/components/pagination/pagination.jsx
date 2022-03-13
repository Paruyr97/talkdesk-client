import { Link } from "react-router-dom";
import { active, BASE_URL, decrement, increment, pagesInfo } from "../../constants";
import { useEffect, useState } from "react";

const disabled = {'pointerEvents': 'none'};

export default function Pagination({ currentPage, setCurrentPage }) {

    const [lastPage, setLastPage] = useState(null);
    const [pagesCount, setPagesCount] = useState(null);

    useEffect(() => {
        getPagesInfo();
    }, [])

    const getPagesInfo = () => {
        fetch(`${BASE_URL}${pagesInfo}`).then(res => res.json()).then(data => {
            setLastPage(data.dataLength);
            setPagesCount(data.pagesCount);
        });
    }

    const pages = Array(pagesCount).fill().map((_, i) => {
        if (currentPage === lastPage) {
            return currentPage + i - 2;
        } else if (currentPage === lastPage - 2 || currentPage === lastPage - 1) {
            return currentPage + i - 1;
        }
        return currentPage + i;
    });

    const changePage = (value) => () => {
        if (currentPage === value) { return; }
        else if (value === decrement) {
            return currentPage > 1 && setCurrentPage(currentPage - 1);
        } else if (value === increment) {
            return currentPage < lastPage && setCurrentPage(currentPage + 1);
        }
        value >= 1 && value <= lastPage && setCurrentPage(value);
    }

    return (
        <ul className="pagination">
            <li onClick={changePage(decrement)}  style={currentPage === 1 ? disabled : {}}>
                <Link to={`/${currentPage - 1 || currentPage}`}>&lt;</Link>
            </li>
            { pages.map((page, idx) => {
                return (
                    <li key={idx}
                        onClick={changePage(page)} 
                        className={currentPage === page ? active : ''}>
                        <Link to={`/${page}`}>{ page }</Link>
                    </li>
                )
            })}
            <li onClick={changePage(increment)}>
                <Link 
                    style={currentPage === lastPage ? disabled : {}}
                    to={`/${currentPage === lastPage ? currentPage : currentPage + 1}`}>&gt;
                </Link>
            </li>
        </ul>
    )
}
