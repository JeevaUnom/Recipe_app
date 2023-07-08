import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import React, { useState } from "react";




export default function PreviousSearches({ onSearch, searchTerm, handleInputChange }){
   
     const [searchResults, setSearchResults] = useState([]);
    const searches = ['pizza', 'burger', 'cookies', 'juice', 'biriyani', 'salad', 'ice cream', 'Shawarma', 'pudding', 'soup'] 



    const handleSearch = () => {
        const filteredResults = searches.filter((search) => search.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchResults(filteredResults);
    };
    return (
        <div className="previous-searches section">
            <h2> Search For Your Recipe</h2>
            <div className="previous-searches-container">
            {searchResults.length > 0 ? (
          searchResults.map((search, index) => (
            <div key={index} style={{ animationDelay: index * 0.1 + 's' }} className="search-item">
              {search}
            </div>
          ))
        ) : (
          <div className="no-results"></div>
        )}
      </div>
      <form className="search-box" onSubmit={handleSearch}> 
        <input type="text" placeholder="Search ..."  value={searchTerm} onChange={handleInputChange} />
        <button className="btn" type="submit" >
          <FontAwesomeIcon icon={faSearch} />
        </button>
        </form>
            
        </div>
    )
}