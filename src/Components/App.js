import React from "react";
import "../App.css";
import Appetizer from "./Appetizer";
import SpicyDishes from "./SpicyDishes";
import NonSpicyDishes from "./NonSpicyDishes";
import Dessert from "./Dessert";
import Drinks from "./Drinks";
import foodItems from "../data/foodItems";


function App() {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <Appetizer appetizer={foodItems.appetizer} />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <SpicyDishes spicyDishes={foodItems.spicyDishes} />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <NonSpicyDishes nonSpicyDishes={foodItems.nonSpicyDishes} />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <Dessert dessert={foodItems.dessert} />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <Drinks drinks={foodItems.drinks} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
