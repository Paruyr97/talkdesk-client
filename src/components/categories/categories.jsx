import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../helpers/helper";

export default function Categories({ selectedCategory, setSelectedCategory, setSearchApp }) {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then(setCategories);
    }, []);

    const handleCategoryClick = (category) => () => {
        setSearchApp('');
        setSelectedCategory(category);
    }

    const getIsActive = (category) => {
        return selectedCategory === category ? 'active' : ''
    }

    return (
        <nav className="nav-categories">
            <h2>Categories</h2>
            <ul className="nav-menu">
                {
                    categories.map((category, idx) => {
                        return (
                            <li key={idx}
                              onClick={handleCategoryClick(category)}
                              className={getIsActive(category)}>
                                <Link to={`category/${category}`}>{category}</Link>
                            </li>
                        )
                    }) 
                }
            </ul>
        </nav>
    )
}
