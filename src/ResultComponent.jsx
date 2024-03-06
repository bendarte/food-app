import React from 'react';
import { Link } from 'react-router-dom';

const ResultComponent = ({ searchResults, setSelectedMeal }) => {
  return (
    <div>
      <ul>
        {searchResults.map((meal) => (
          <li key={meal.idMeal}>
            <Link to={`/meal/${meal.idMeal}`} onClick={() => setSelectedMeal(meal)}>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              {meal.strMeal}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultComponent;

