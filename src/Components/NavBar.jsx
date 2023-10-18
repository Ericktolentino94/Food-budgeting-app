import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav>
        <h1>
          <Link to="/foods">Foods</Link>
        </h1>
        <button>
          <Link to="/foods/new">New Food</Link>
        </button>
      </nav>
    </div>
  );
}
