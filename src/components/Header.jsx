import { Link } from "react-router-dom";
import "./Header.css";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const {isLoggedIn, login, logout, setUser, loggedUser} = useAuth();

  return (
    <nav className="bg-green-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-3">
          <img 
            src="/logo.png"  // Replace with your actual logo path
            alt="AgriConnect Logo"
            className="h-10 w-10 object-contain"
          />
          <Link to="/" className="text-2xl font-bold tracking-wide">
            AgriConnect
          </Link>
        </div>
      
        <ul className="hidden md:flex gap-4 space-x-6">
          <li><Link to="/" className="hover:text-green-300 transition">Home</Link></li>
          <li><Link to="/aboutus" className="hover:text-green-300 transition">AboutUs</Link></li>
          <li><Link to="/contact" className="hover:text-green-300 transition">Contact</Link></li>
          <li><Link to="/market" className="hover:text-green-300 transition">Market</Link></li>
        </ul>

        {/* Login / Signup Buttons */}
        <div className="space-x-4 hidden md:flex">
          {isLoggedIn && <Link to="/profile" className="bg-white text-green-800 px-4 py-2 rounded-lg font-bold hover:bg-gray-200 transition">
            Edit Profile</Link>}
          {isLoggedIn&& <Link onClick={logout}>Logout</Link>}
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