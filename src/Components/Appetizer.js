import React from 'react';

function Appetizer({ appetizer }) {
  return (
    <div className="menu-listr">
      <h2>Appetizers</h2>
      <ol className="dish-list">
        {appetizer.map((appetizer) => (
          <li key={appetizer.id} className="dish-item">
            <h3>{appetizer.name}</h3>
            <p>Price: {appetizer.price}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Appetizer;
