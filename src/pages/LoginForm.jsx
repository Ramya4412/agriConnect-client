import { useState } from "react";
import './LoginForm.css';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="./logo.png" alt="AgriConnect" className="login-logo" />
        <h2 className="login-title">LOGIN</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label className="form-label">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password:</label>
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

        <div className="login-links">
          <p>Forgot your password?</p>
          <p>Not registered yet? <a href="#" className="signup-link">Sign up</a></p>
          <p>Didn't receive confirmation instructions?</p>
        </div>
      </div>
    </div>
  );
}
