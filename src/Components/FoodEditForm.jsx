import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
const API = "https://budget-app-server-0ahv.onrender.com/";

function FoodEditForm() {
    let { index } = useParams();

    const [food, setFood] = useState({
        item_name: '',
        amount: '',
        date: '',
        from: '',
        category: ''
    });

    const navigate = useNavigate();

    const handleTextChange = (event) => {
        setFood({ ...food, [event.target.id]: event.target.value });
    };

    useEffect(() => {
        fetch(`${API}/foods/${index}`)
            .then((response) => response.json())
            .then((data) => {
                setFood(data);
            })
            .catch(() => navigate('/not-found'));
    }, [index, navigate]);

    const updateFood = () => {
        const httpOptions = {
            method: 'PUT',
            body: JSON.stringify(food),
            headers: {
                'Content-Type': 'application/json',
            }
        };

        fetch(`${API}/foods/${index}`, httpOptions)
            .then(() => {
                alert(`${food.item_name} has been updated!`);
                navigate(`/foods/${index}`);
            })
            .catch((err) => console.error(err));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateFood();
    };

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header">
                    <h3>Edit Food Item</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="item_name" className="form-label">Name:</label>
                            <input
                                id="item_name"
                                value={food.item_name}
                                type="text"
                                onChange={handleTextChange}
                                className="form-control"
                                placeholder="Name of Food"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="amount" className="form-label">Amount:</label>
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
                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Date:</label>
                            <input
                                id="date"
                                value={food.date}
                                type="date"
                                onChange={handleTextChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="from" className="form-label">From:</label>
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
                        <div className="mb-3">
                            <label htmlFor="category" className="form-label">Category:</label>
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
                        <button type="submit" className="btn btn-primary">Update Food</button>
                    </form>
                </div>
                <div className="card-footer">
                    <Link to={`/foods/${index}`} className="btn btn-secondary">Cancel</Link>
                </div>
            </div>
        </div>
    );
}

export default FoodEditForm;
