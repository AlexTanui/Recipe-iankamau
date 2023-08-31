import React from 'react';

function Dessert({ dessert }) {
  return (
    <div className="menu-list">
      <h2>Dessert</h2>
      <ol className="dish-list">
        {dessert.map((dessert) => (
          <li key={dessert.id} className="dish-item">
            <h3>{dessert.name}</h3>
            <p>Price: {dessert.price}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Dessert;