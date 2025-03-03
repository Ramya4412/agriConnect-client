import React, { useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    permanentAddress: {
      doorNo: "",
      street: "",
      city: "",
      country: "",
      state: "",
      pincode: "",
    },
    currentAddress: {
      doorNo: "",
      street: "",
      city: "",
      country: "",
      state: "",
      pincode: "",
    },
    sameAsPermanent: false,
    languages: [],
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddressChange = (e, type) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [type]: { ...formData[type], [name]: value },
    });
  };

  const toggleSameAsPermanent = () => {
    setFormData((prev) => ({
      ...prev,
      sameAsPermanent: !prev.sameAsPermanent,
      currentAddress: prev.sameAsPermanent ? {
        doorNo: "",
        street: "",
        city: "",
        country: "",
        state: "",
        pincode: "",
      } : prev.permanentAddress,
    }));
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  return (
    <div className="p-6 max-w-lg mx-auto border rounded-lg shadow-lg">
      {step === 1 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Personal Details</h2>
          <input type="text" name="name" placeholder="Name" className="w-full mb-2 p-2 border" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" className="w-full mb-2 p-2 border" onChange={handleChange} />
          <input type="text" name="phone" placeholder="Phone" className="w-full mb-2 p-2 border" onChange={handleChange} />
          <input type="date" name="dob" className="w-full mb-2 p-2 border" onChange={handleChange} />
          <select name="gender" className="w-full mb-2 p-2 border" onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <button className="p-2 bg-blue-500 text-white" onClick={handleNext}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Information</h2>
          <input type="text" name="doorNo" placeholder="Door No" className="w-full mb-2 p-2 border" onChange={(e) => handleAddressChange(e, 'permanentAddress')} />
          <input type="text" name="street" placeholder="Street" className="w-full mb-2 p-2 border" onChange={(e) => handleAddressChange(e, 'permanentAddress')} />
          <input type="text" name="city" placeholder="City" className="w-full mb-2 p-2 border" onChange={(e) => handleAddressChange(e, 'permanentAddress')} />
          <input type="text" name="country" placeholder="Country" className="w-full mb-2 p-2 border" onChange={(e) => handleAddressChange(e, 'permanentAddress')} />
          <input type="text" name="state" placeholder="State" className="w-full mb-2 p-2 border" onChange={(e) => handleAddressChange(e, 'permanentAddress')} />
          <input type="text" name="pincode" placeholder="Pincode" className="w-full mb-2 p-2 border" onChange={(e) => handleAddressChange(e, 'permanentAddress')} />
          <input type="checkbox" checked={formData.sameAsPermanent} onChange={toggleSameAsPermanent} /> Same as Permanent Address
          <div className="mt-4">
            <button className="p-2 bg-gray-500 text-white mr-2" onClick={handleBack}>Back</button>
            <button className="p-2 bg-blue-500 text-white" onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Languages Known</h2>
          <label className="mr-4"><input type="checkbox" /> Read</label>
          <label className="mr-4"><input type="checkbox" /> Write</label>
          <label className="mr-4"><input type="checkbox" /> Speak</label>
          <div className="mt-4">
            <button className="p-2 bg-gray-500 text-white mr-2" onClick={handleBack}>Back</button>
            <button className="p-2 bg-blue-500 text-white" onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
      {step === 4 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Credentials</h2>
          <input type="text" name="username" placeholder="Username" className="w-full mb-2 p-2 border" onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" className="w-full mb-2 p-2 border" onChange={handleChange} />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" className="w-full mb-2 p-2 border" onChange={handleChange} />
          <div className="mt-4">
            <button className="p-2 bg-gray-500 text-white mr-2" onClick={handleBack}>Back</button>
            <button className="p-2 bg-green-500 text-white">Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;