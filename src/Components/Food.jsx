import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './Food.css'; // Import the CSS file
const API = "https://budget-app-server-0ahv.onrender.com"

function Food({ food, index }) {
  let navigate = useNavigate();
  const handleDelete = () => {
    const httpOptions = { method: 'DELETE' };

    fetch(`${API}/foods/${index}`, httpOptions)
      .then((res) => {
        console.log(res);
        alert('The food item was deleted.');
        // Refresh the page after the item is deleted
        window.location.reload();
      })
      .catch((err) => console.error(err));
  };

  return (
    <tr className="food-row">
      <td>
        <Link to={`/foods/${index}`} className="food-link">
          {food.item_name}
        </Link>
      </td>
      <td>{food.amount}</td>
      <td>{food.date}</td>
      <td>{food.from}</td>
      <td>{food.category}</td>
      <td>
        <Link to={`/foods/${index}/edit`} className="edit-link">
          ✏️
        </Link>
      </td>
      <td>
        <button onClick={handleDelete} className="delete-button">
          🗑️
        </button>
      </td>
    </tr>
  );
}

export default Food;
