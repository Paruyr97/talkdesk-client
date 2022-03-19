import PropTypes from 'prop-types';

import { searchByApp } from "../../constants";
import { filterDataBySearch } from "../../helpers/helper";

export default function Search({
  searchValue,
  setSearchValue,
  currentData,
  setFilteredData,
}) {
  const handleInputChange = ({ target: { value } }) => {
    setSearchValue(value);
    setFilteredData(filterDataBySearch(currentData, value.trim()));
  };

  return (
    <header>
      <input
        type="text"
        placeholder={searchByApp}
        value={searchValue}
        onChange={handleInputChange}
      />
    </header>
  );
}

Search.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  currentData: PropTypes.array.isRequired,
  setFilteredData: PropTypes.func.isRequired,
};
