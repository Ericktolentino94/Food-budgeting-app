import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

function FoodNewForm() {
  const [food, setFood] = useState({
    item_name: "",
    amount: "",
    date: "",
    from: "",
    category: ""
  });

  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setFood({ ...food, [event.target.id]: event.target.value });
  };

  const addFood = () => {
    const httpOptions = {
      method: "POST",
      body: JSON.stringify(food),
      headers: {
        "Content-Type": "application/json" 
      }
    };

    fetch(`${API}/foods`, httpOptions)
      .then((res) => {
        alert(`${food.item_name} added`);
        navigate("/foods");
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addFood();
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="item_name">Name</label>
        <input
          id="item_name"
          value={food.item_name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of food"
          required
        />
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          value={food.amount}
          type="text"
          onChange={handleTextChange}
          placeholder="Amount"
          required
        />
        <label htmlFor="date">Date</label>
        <input
          id="date"
          value={food.date}
          type="text"
          onChange={handleTextChange}
          placeholder="Date"
          required
        />
        <label htmlFor="from">From</label>
        <input
          id="from"
          value={food.from}
          type="text"
          onChange={handleTextChange}
          placeholder="Source"
          required
        />
        <label htmlFor="category">Category</label>
        <input
          id="category"
          value={food.category}
          type="text"
          onChange={handleTextChange}
          placeholder="Category"
          required
        />
        <button type="submit">Add Food</button>
      </form>
    </div>
  );
}

export default FoodNewForm;
