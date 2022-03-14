import { filterDataBySearch } from "../../helpers/helper";

export default function Search({ searchApp, setSearchApp, currentData, setFilteredData }) {

    const handleInputChange = ({ target: { value }}) => {
        const trimValue = value.trim();
        setSearchApp(trimValue);
        setFilteredData(filterDataBySearch(currentData, trimValue));
    }
       
    return (
        <header>
          <input type="text"
            placeholder="Search by App"
            value={searchApp}
            onChange={handleInputChange}/>
        </header>
    )
}
