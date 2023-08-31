import React from 'react';

function Drinks({ drinks }) {
  return (
    <div className="menu-list">
      <h2>Drinks</h2>
      <ol className="dish-list">
        {drinks.map((drinks) => (
          <li key={drinks.id} className="dish-item">
            <h3>{drinks.name}</h3>
            <p>Price: {drinks.price}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Drinks;