import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
const API = import.meta.env.VITE_BASE_URL;

function FoodDetails() {
    const [food, setFood] = useState([]);
    let { index } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        fetch(`${API}/foods/${index}`)
            .then((response) => response.json())
            .then((food) => {
                setFood(food);
            })
            .catch(() => navigate('/not-found'));
    }, [index, navigate]);

    const handleDelete = () => {
        const httpOptions = { method: 'DELETE' };

        fetch(`${API}/foods/${index}`, httpOptions)
            .then((res) => {
                console.log(res);
                alert('The food item was deleted.');
                navigate('/foods');
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header">
                    <h3>Item Details</h3>
                </div>
                <div className="card-body">
                    <h4 className="card-title">Item Name: {food.item_name}</h4>
                    <p className="card-text">Amount: {food.amount}</p>
                    <p className="card-text">Date: {food.date}</p>
                    <p className="card-text">From: {food.from}</p>
                    <p className="card-text">Category: {food.category}</p>
                </div>
                <div className="card-footer">
                    <Link to="/foods" className="btn btn-primary">Back</Link>
                    <Link to={`/foods/${index}/edit`} className="btn btn-warning ml-2">Edit</Link>
                    <button onClick={handleDelete} className="btn btn-danger ml-2">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default FoodDetails;
