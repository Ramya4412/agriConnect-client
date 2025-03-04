import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const {isLoggedIn, login, logout, setUser, loggedUser} = useAuth();

  return (
    <nav className="bg-green-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          AgriConnect
        </Link>

      
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-green-300 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-green-300 transition">About</Link></li>
          <li><Link to="/contact" className="hover:text-green-300 transition">Contact</Link></li>
        </ul>

        {/* Login / Signup Buttons */}
        <div className="space-x-4 hidden md:flex">
          {isLoggedIn&& <Link>Logout</Link>}
          {!isLoggedIn &&<Link to="/LoginForm" className="bg-white text-green-800 px-4 py-2 rounded-lg font-bold hover:bg-gray-200 transition">
            Login
          </Link>
}
          {!isLoggedIn && <Link to="/signup" className="bg-green-600 px-4 py-2 rounded-lg font-bold hover:bg-green-700 transition">
            Sign Up
          </Link>
}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white text-2xl">&#9776;</button>
        </div>
      </div>
    </nav>
  );
}
