import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL

function foodDetails() {
    const [ food, setFood ] = useState([]);
    let { index } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        try {
            fetch(`http://localhost:8484/foods/${index}`)
                .then(response => response.json())
                .then(food => {
                    setFood(food)
                })
        }
        catch {(err) => console.log(err)}
}, [index, navigate]);

    return (
        <div>
            <h3>Item Name: {food.item_name}</h3>
            <h4>Amount: {food.amount}</h4>
            <h4>Date: {food.date}</h4>
            <h4>From: {food.from}</h4>
            <h4>Category:{food.category}</h4>
        </div>
    )
}

export default foodDetails;