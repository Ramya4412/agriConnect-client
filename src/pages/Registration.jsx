import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MultiStepRegistration() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    doorNumber: "",
    city: "",
    state: "",
    zipCode: "",
    role: "consumer",
    farmName: "",
    farmSize: "",
    cropType: "",
    soilType: "",
    irrigationMethod: "",
    experience: "",
    username: "",
    password: "",
    confirmPassword: ""
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  async function handleSubmit(e) {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      const responseData = await res.json();
      console.log("Server Response:", responseData);
      
      if (!res.ok) {
        throw new Error(responseData.message || "Failed to register.");
      }
      

      setRegistrationSuccess(true);
      setTimeout(() => navigate("/LoginForm"), 2000);
    } catch (err) {
      console.error("Registration error:", err);
      alert("Something went wrong: " + err.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <form className="bg-white p-6 rounded-lg shadow-lg w-96" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-green-700 mb-4">Register</h2>
        {registrationSuccess ? (
          <p className="text-green-700 text-center font-bold">Registration successful! Redirecting...</p>
        ) : (
          <>
            {step === 1 && (
              <>
                <label className="block text-green-800">Full Name</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
                <label className="block text-green-800">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
                <label className="block text-green-800">Phone Number</label>
                <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
                <label className="block text-green-800">Role</label>
                <select name="role" value={formData.role} onChange={handleChange} className="w-full p-2 border rounded mb-2">
                  <option value="consumer">Consumer</option>
                  <option value="producer">Producer</option>
                </select>
                <button type="button" onClick={nextStep} className="w-full bg-green-700 text-white p-2 rounded mt-4">Next</button>
              </>
            )}

            {step === 2 && (
              <>
                <label className="block text-green-800">Door Number</label>
                <input type="text" name="doorNumber" value={formData.doorNumber} onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
                <label className="block text-green-800">City</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
                <label className="block text-green-800">State</label>
                <input type="text" name="state" value={formData.state} onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
                <label className="block text-green-800">Zip Code</label>
                <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
                <div className="flex justify-between mt-4">
                  <button type="button" onClick={prevStep} className="bg-green-700 text-white p-2 rounded">Back</button>
                  <button type="button" onClick={nextStep} className="bg-green-700 text-white p-2 rounded">Next</button>
                </div>
              </>
            )}
            {step === 3 && (
              <>
                {formData.role === "producer" ? (
                  <>
                    <label className="block text-green-800">Farm Name</label>
                    <input type="text" name="farmName" value={formData.farmName} onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
                    <label className="block text-green-800">Farm Size (in acres)</label>
                    <input type="text" name="farmSize" value={formData.farmSize} onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
                    <label className="block text-green-800">Primary Crop Type</label>
                    <input type="text" name="cropType" value={formData.cropType} onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
                    <label className="block text-green-800">Soil Type</label>
                    <input type="text" name="soilType" value={formData.soilType} onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
                    <label className="block text-green-800">Irrigation Method</label>
                    <input type="text" name="irrigationMethod" value={formData.irrigationMethod} onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
                    <div className="flex justify-between mt-4">
                      <button type="button" onClick={prevStep} className="bg-green-700 text-white p-2 rounded">Back</button>
                      <button type="button" onClick={nextStep} className="bg-green-700 text-white p-2 rounded">Next</button>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Consumer sees the register button here */}
                    <label className="block text-green-800">Username</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
                    <label className="block text-green-800">Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
                    <label className="block text-green-800">Confirm Password</label>
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
                    <div className="flex justify-between mt-4">
                      <button type="button" onClick={prevStep} className="bg-green-700 text-white p-2 rounded">Back</button>
                    </div>
                    <button type="submit" className="bg-green-700 text-white p-2 rounded">Register</button>

                  </>
                )}
              </>
            )}

            {step === 4 && formData.role === "producer" && (
              <>
                <label className="block text-green-800">Username</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
                <label className="block text-green-800">Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
                <label className="block text-green-800">Confirm Password</label>
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
                <div className="flex justify-between mt-4">
                      <button type="button" onClick={prevStep} className="bg-gray-500 text-white p-2 rounded">Back</button>
                    </div>
                    <button type="submit" className="bg-green-700 text-white p-2 rounded">Register</button>

              </>
            )}
          </>
        )}
      </form>
    </div>
  );
}