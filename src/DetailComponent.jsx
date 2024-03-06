import React, { useEffect, useState } from 'react';
import './App.css'; // Importera din externa CSS-fil

const DetailComponent = ({ selectedMeal }) => {
  const [mealDetails, setMealDetails] = useState(null);

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${selectedMeal.idMeal}`);
        const data = await response.json();

        if (data.meals) {
          setMealDetails(data.meals[0]);
        } else {
          setMealDetails(null);
        }
      } catch (error) {
        console.error('Error fetching meal details:', error);
      }
    };

    if (selectedMeal) {
      fetchMealDetails();
    }
  }, [selectedMeal]);

  if (!mealDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className="detail-container">
      <h2 className="detail-title">{mealDetails.strMeal}</h2>
      <img className="detail-image" src={mealDetails.strMealThumb} alt={mealDetails.strMeal} />
      <p className="detail-instructions">{mealDetails.strInstructions}</p>
      {/* Lägg till fler klasser och styling här */}
    </div>
  );
};

export default DetailComponent;


