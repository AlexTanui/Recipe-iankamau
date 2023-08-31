import React from 'react';

function SpicyDishes({ spicyDishes }) {
  return (
    <div className="menu-list">
      <h2>Spicy Dishes</h2>
      <ol className="dish-list">
        {spicyDishes.map((spicyDishes) => (
          <li key={spicyDishes.id} className="dish-item">
            <h3>{spicyDishes.name}</h3>
            <p>Price: {spicyDishes.price}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default SpicyDishes;