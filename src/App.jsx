import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchComponent from './SearchComponent';
import ResultComponent from './ResultComponent';
import DetailComponent from './DetailComponent';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      const data = await response.json();

      if (data.meals) {
        setSearchResults(data.meals);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchComponent
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                onSearch={handleSearch}
              />
              <ResultComponent
                searchResults={searchResults}
                setSelectedMeal={setSelectedMeal}
              />
            </>
          }
        />
        <Route path="/meal/:id" element={<DetailComponent selectedMeal={selectedMeal} />} />
      </Routes>
    </Router>
  );
};

export default App;


