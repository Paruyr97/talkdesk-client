import { filterDataBySearch } from "../../helpers/helper";

export default function Search({
  searchApp,
  setSearchApp,
  currentData,
  setFilteredData,
}) {
  const handleInputChange = ({ target: { value } }) => {
    setSearchApp(value);
    setFilteredData(filterDataBySearch(currentData, value.trim()));
  };

  return (
    <header>
      <input
        type="text"
        placeholder="Search by App"
        value={searchApp}
        onChange={handleInputChange}
      />
    </header>
  );
}
