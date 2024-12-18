// src/components/SearchSection.jsx
import React from 'react';
import './SearchSection.css'; // Import the CSS file

const SearchSection = () => {
  return (
    <div className="search-section">
      <div className="container">
        <h1 className="display-4 mb-4">Find Your Dream Home</h1>
        <form className="d-flex justify-content-center">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search for homes, locations, etc."
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchSection;
