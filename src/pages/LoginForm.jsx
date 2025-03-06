import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
export default function LoginForm() {
  const nav = useNavigate();
  const { login, setUser } = useAuth();
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

  async function handleSubmit(e){
    e.preventDefault();
    try{
      const res = await fetch("http://localhost:3000/users");
      const resjson = await res.json();
      const user = resjson.find((user) => user.email === formData.email);
      if (!user) {
        alert("User not found");
        return;
      }
      if(user.password !== formData.password){
        alert("Incorrect password");
        return;
      }
      login();
      setUser(user);
      nav("/")
    }catch(err){
      alert("Something went wrong: " + err);
    }
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <div className="flex justify-center mb-4">
          <img src="./logo.png" alt="AgriConnect" className="w-20 h-20" />
        </div>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          LOGIN
        </h2>
        <form onSubmit={handleSubmit} className="text-black">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-600">
          <p className="hover:text-blue-600 cursor-pointer">Forgot your password?</p>
          <p>
            Not registered yet?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
          
        </div>
      </div>
    </div>
  );
}
