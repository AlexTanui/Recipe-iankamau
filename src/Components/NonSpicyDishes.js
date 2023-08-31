import React from 'react';

function NonSpicyDishes({ nonSpicyDishes }) {
  return (
    <div className="menu-list">
      <h2>Non Spicy Dishes</h2>
      <ol className="dish-list">
        {nonSpicyDishes.map((nonSpicyDishes) => (
          <li key={nonSpicyDishes.id} className="dish-item">
            <h3>{nonSpicyDishes.name}</h3>
            <p>Price: {nonSpicyDishes.price}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default NonSpicyDishes;