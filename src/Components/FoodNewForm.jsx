import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = "https://budget-app-server-0ahv.onrender.com/"

function FoodNewForm() {
  const [food, setFood] = useState({
    item_name: "",
    amount: "",
    date: "",
    from: "",
    category: "",
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
        "Content-Type": "application/json",
      },
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
    <div className="container">
      <div className="New">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="item_name">Name</label>
            <input
              id="item_name"
              value={food.item_name}
              type="text"
              onChange={handleTextChange}
              className="form-control"
              placeholder="Name of food"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              id="amount"
              value={food.amount}
              type="number"
              onChange={handleTextChange}
              className="form-control"
              placeholder="Amount"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              value={food.date}
              type="date"
              onChange={handleTextChange}
              className="form-control"
              placeholder="Date"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="from">From</label>
            <input
              id="from"
              value={food.from}
              type="text"
              onChange={handleTextChange}
              className="form-control"
              placeholder="Source"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              id="category"
              value={food.category}
              type="text"
              onChange={handleTextChange}
              className="form-control"
              placeholder="Category"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Food
          </button>
        </form>
      </div>
    </div>
  );
}

export default FoodNewForm;
