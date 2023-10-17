import { useEffect, useState } from "react";
import Food from "./Food"
const API = import.meta.env.VITE_BASE_URL 

function Foods() {
const [foods, setFoods] = useState([]);
useEffect(() => {
    fetch(`${API}/foods`)
    .then((response) => {console.log(response), response.json()})
    .then( foods => setFoods(foods))
    .catch(error => console.log(error))
}, [])

return (
    <div className="Foods">
       
            <div>
                {foods.map((foods, index) => {
                    return <Food key={index} foods={foods} index={index} />;
                })}
            </div>
       
    </div>
)
}

export default Foods