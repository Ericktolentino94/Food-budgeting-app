import { Link } from "react-router-dom";
import "../Components/NavBar.css"

export default function NavBar() {
  return (
    <div>
      <nav className="Nav">
        <h1>
          <Link to="/foods">Foods</Link>
        </h1>
        <button>
          <Link to="/foods/new">New Food</Link>
        </button>
        <h1>
            <Link to="/">Dine on a Dime</Link>
        </h1>
      </nav>
    </div>
  );
}
