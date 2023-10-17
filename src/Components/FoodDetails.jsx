import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL

function foodDetails() {
    const [ food, setFood ] = useState([]);
    let { index } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        try {
            fetch(`${API}/food/${index}`)
                .then(response => response.json())
                .then(food => {
                    setFood(food)
                })
        }
        catch {(err) => console.log(err)}
}, [index, navigate]);

    return (
        <div>
            <h3>{food.item_name}</h3>
        </div>
    )
}

export default foodDetails;