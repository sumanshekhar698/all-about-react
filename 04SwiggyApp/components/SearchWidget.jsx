
import React from "react";


const SearchWidget = ({ onSearch, searchQuery }) => {
  const [inputValue, setInputValue] = React.useState(searchQuery || "");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <div className="search-container">
      <h1>Discover best restaurants. Swiggy it!</h1>
      <div className="search-div">
        <input
          type="text"
          placeholder="Search for restaurants or cuisines"
          value={inputValue}
          onChange={handleInputChange}
        ></input>
        <button onClick={handleSearch}>
          <i className="fas fa-search"></i>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchWidget;