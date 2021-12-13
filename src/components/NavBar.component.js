import { Link } from "react-router-dom";
import "./NavBar.component.css";
export default function NavBar() {
  return (
    <nav className="navbar">
      <Link className="brand" to="/">Your Logo</Link>
      <Link className="text-right" to="/login">
        Login
      </Link>
    </nav>
  )
}