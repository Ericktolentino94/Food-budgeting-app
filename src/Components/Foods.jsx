import { useEffect, useState } from "react";
import Food from "./Food";

const API = import.meta.env.VITE_BASE_URL;

function Foods() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(`${API}/foods`)
      .then((response) => response.json())
      .then((data) => setFoods(data))
      .catch((error) => console.log(error));
  }, []);

  // Calculate the total amount
  const totalSpend = foods.reduce((total, food) => total + parseFloat(food.amount), 0);

  return (
    <div className="Foods">
      <h2>Total Spend on Food this Month: {totalSpend}</h2>
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Amount</th>
            <th>Date</th>
            <th>From</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food, index) => (
            <Food key={index} food={food} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Foods;
