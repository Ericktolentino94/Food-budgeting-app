import { Link } from "react-router-dom"

function Food({ foods, index} ) {
    return (
        <tr>
            <h2>{foods.category}</h2>
        </tr>
    )
}

export default Food;