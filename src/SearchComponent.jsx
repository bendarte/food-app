import React, { useState } from 'react';

const SearchComponent = ({ searchTerm, setSearchTerm, onSearch }) => {
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      setError(null); // Återställ felmeddelandet innan varje sökning

      if (!searchTerm) {
        setError('Please enter a meal name.');
        return;
      }

      const result = await onSearch();

      // Lägg till logik för att kontrollera API-svar här
      if (result.length === 0) {
        setError(`No results found for "${searchTerm}".`);
      }
    } catch (error) {
      console.error('Error searching:', error);
      setError('Ingen maträtt hittad habibi You!');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search for a meal..."
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SearchComponent;
