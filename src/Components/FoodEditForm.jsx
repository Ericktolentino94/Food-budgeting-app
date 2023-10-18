import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

function FoodEditForm() {
    let { index } = useParams();

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

    useEffect(() => {
        fetch(`${API}/foods/${index}`)
            .then(response => response.json())
            .then(data => {
                setFood(data);
            })
            .catch(() => navigate("/not-found"));
    }, [index, navigate]);

    const updateFood = () => {
        const httpOptions = {
            method: "PUT",
            body: JSON.stringify(food),
            headers: {
                "Content-Type": "application/json" // Corrected header naming
            }
        }

        fetch(`${API}/foods/${index}`, httpOptions)
            .then(() => {
                alert(`${food.item_name} has been updated!`);
                navigate(`/foods/${index}`);
            })
            .catch((err) => console.error(err));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        updateFood();
    };

    return (
        <div className="Edit">
            <form onSubmit={handleSubmit}>
                <label htmlFor="item_name">Name:</label>
                <input
                    id="item_name"
                    value={food.item_name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name of Food"
                    required
                />
                <button type="submit">Update Food</button>
            </form>
        </div>
    )
}

export default FoodEditForm;
