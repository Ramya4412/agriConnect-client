import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css"; // Import your CSS file

export default function LoginForm() {
  const nav = useNavigate();
  const { login, setUser } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
onabort
async function handleSubmit(e) {
  e.preventDefault();
  try {
    const res = await fetch("http://localhost:3000/users"); // Fetch users from backend
    const resjson = await res.json();
    
    // Find user by username
    const user = resjson.find((user) => user.username === formData.username);

    if (!user) {
      alert("User not found");
      return;
    }

    if (user.password !== formData.password) {
      alert("Incorrect password");
      return;
    }

    // Save user in context and localStorage
    login(user);
    nav("/");
  } catch (err) {
    alert("Something went wrong: " + err);
  }
    console.log(formData);
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="flex justify-center mb-4">
        <img src="./logo.png" alt="AgriConnect" className="logo w-24 h-24" />
        </div>
        <h2 className="login-title">LOGIN</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="mb-4">
            <label className="label">Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div className="mb-4">
            <label className="label">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <div className="login-footer">
          <p className="hover:text-blue-600 cursor-pointer">Forgot your password?</p>
          <p>
  Not registered yet?{" "}
  <Link to="/signup" className="hover:underline">
    Sign up
  </Link>
</p>
        </div>
      </div>
    </div>
  );
}
