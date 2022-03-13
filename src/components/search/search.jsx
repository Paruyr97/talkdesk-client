import { useState } from "react"
import { getfilteredDataBySearch } from "../../helpers/helper";

export default function Search({ setFilteredDataBySearch,searchApp,setSearchApp }) {

    const [timer, setTimer] = useState(null);

    const handleInputChange = ({ target: { value }}) => {
        setSearchApp(value.trim());

        if (timer) {
            clearTimeout(timer);
        }

        setTimer(setTimeout(() => {
            value.trim() && getfilteredDataBySearch(value).then(setFilteredDataBySearch);
        }, 500));
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
