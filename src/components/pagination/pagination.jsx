import { Link } from "react-router-dom";
import { active, decrement, increment, pagesCount } from "../../constants";

const disabled = {'pointerEvents': 'none'};

export default function Pagination({ currentPage, setCurrentPage, dataLength }) {
    const pages = Array(dataLength < pagesCount ? dataLength : pagesCount).fill().map((_, i) => {
        if (currentPage === dataLength) {
            return currentPage + i - 2;
        } else if (currentPage === dataLength - 2 || currentPage === dataLength - 1) {
            return currentPage + i - 1;
        }
        return currentPage + i;
    });

    const changePage = (value) => () => {
        if (currentPage === value) { return; }
        else if (value === decrement) {
            return currentPage > 1 && setCurrentPage(currentPage - 1);
        } else if (value === increment) {
            return currentPage < dataLength && setCurrentPage(currentPage + 1);
        }
        value >= 1 && value <= dataLength && setCurrentPage(value);
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
                    style={currentPage === dataLength ? disabled : {}}
                    to={`/${currentPage === dataLength ? currentPage : currentPage + 1}`}>&gt;
                </Link>
            </li>
        </ul>
    )
}
