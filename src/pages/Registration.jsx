import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    role: "consumer",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const resjson = await res.json();
      console.log(resjson);
      nav("/LoginForm");
    } catch (err) {
      alert("Something went wrong: " + err);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Register</h2>

        <label className="block text-green-800">Full Name</label>
        <input 
          type="text" 
          name="fullName" 
          value={formData.fullName} 
          onChange={handleChange} 
          className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <label className="block text-green-800">Email</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <label className="block text-green-800">Address</label>
        <input 
          type="text" 
          name="address" 
          value={formData.address} 
          onChange={handleChange} 
          className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <label className="block text-green-800">Role</label>
        <select 
          name="role" 
          value={formData.role} 
          onChange={handleChange} 
          className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="consumer">Consumer</option>
          <option value="producer">Producer</option>
        </select>

        <label className="block text-green-800">Password</label>
        <input 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <button 
          type="submit" 
          className="w-full bg-green-700 text-white p-2 rounded hover:bg-green-800 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}
