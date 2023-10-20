import { useEffect, useState } from "react";
import Food from "./Food";
import './Foods.css'; // Import the CSS file
const API = import.meta.env.VITE_BASE_URL;
import 'bootstrap/dist/css/bootstrap.css';

function Foods() {
  const [foods, setFoods] = useState([]);
  const [totalSpend, setTotalSpend] = useState(0);
  const [totalClass, setTotalClass] = useState("");

  useEffect(() => {
    fetch(`${API}/foods`)
      .then((response) => response.json())
      .then((data) => {
        setFoods(data);

        // Calculate totalSpend and format it to two decimal places
        const calculatedTotalSpend = data.reduce((total, food) => total + parseFloat(food.amount), 0).toFixed(2);
        setTotalSpend(calculatedTotalSpend);

        // Update the color class based on totalSpend
        if (calculatedTotalSpend < 100) {
          setTotalClass("total-green");
        } else if (calculatedTotalSpend >= 100 && calculatedTotalSpend <= 300) {
          setTotalClass("total-yellow");
        } else if (calculatedTotalSpend > 300) {
          setTotalClass("total-red");
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <div className="Foods">
        <h2 className="text-center">Total Spend on Food this Month: <span className={`text-${totalClass}`}>{totalSpend}</span></h2>
        <table className="table table-striped">
          <thead>
            <tr className="Row">
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
    </div>
  );
}

export default Foods;
