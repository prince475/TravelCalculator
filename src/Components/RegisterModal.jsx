import React, { useState } from "react";
import validator from "validator";

function RegisterModal({ openLoginPopup }) {
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState('');

  const [regData, setRegData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    branch: "",
    password: "",
    confirmPassword: "",
  });

  function handleChangeReg(e) {
    setRegData({
      ...regData,
      [e.target.id]: e.target.value,
    });
  }
  const handleRegister = (event) => {
    event.preventDefault();

    if(validateForm()) {

      fetch("http://localhost:8000/registrations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(regData),
      })
      .then((response) => response.json())
      .then((data) => {

        setSuccessMessage('Registration successful');
        openLoginPopup();
      })
      .catch((error) => {
        console.error('Registration error:', error);

        setErrorMessage('Registration failed. Please try again!');

        setRegData({
          firstName: '',
          lastName: '',
          email: '',
          branch: '',
          password: '',
          confirmPassword: '',
        });
      })
    }
    
  };

  function validateForm() {
    const newErrors = [];

    if (!regData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }

    if (!regData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    }

    if (!regData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!regData.branch.trim()) {
      newErrors.branch = "Branch is required";
    }

    if (!regData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (regData.password.length < 6) {
      newErrors.password = "Password should be at least 6 characters long";
    }
  
    if (!regData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (regData.password !== regData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
  

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  return (
    <div className="fixed inset-0 bg-sky-500 bg-opacity-30 backdrop-blur-sm flex justify-center items-center ">
      <div className="bg-white/80 rounded card">
        <h4 className="font-bold mt-2 pb-2 border-b border-gray-200 text-2xl text-red-600">
          Hello Consultant! Register Here
        </h4>
        <form action="#">
          <div className="grid grid-cols-2 gap-4 pt-4">
            <label className="block">
              <span className="block text-sm font-medium text-slate-700">
                FirstName
              </span>
              <input
                type="text"
                id="firstName"
                value={regData.firstName}
                onChange={handleChangeReg}
                placeholder="Jane"
                className={`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
    invalid:border-pink-500 invalid:text-pink-600
    focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    ${errors.firstName ? "error" : ""}`}
              />
              {errors.firstName && (
                <span className="text-red-500">{errors.firstName}</span>
              )}
            </label>
            <label className="block">
              <span className="block text-sm font-medium text-slate-700">
                LastName
              </span>
              <input
                type="text"
                id="lastName"
                value={regData.lastName}
                onChange={handleChangeReg}
                placeholder="Doe"
                className={`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
              ${errors.lastName ? "error" : ""}`}
              />
              {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
            </label>
          </div>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Email Address
            </span>
            <input
              type="email"
              id="email"
              value={regData.email}
              onChange={handleChangeReg}
              placeholder="@britam.com"
              className={`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
              ${errors.email ? "error" : ""}`}
              />
              {errors.email && <span className="text-red-500">{errors.email}</span>}
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Branch
            </span>
            <input
              type="text"
              id="branch"
              value={regData.branch}
              onChange={handleChangeReg}
              placeholder="Branch"
              className={`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
              ${errors.branch ? "error" : ""}`}
              />
              {errors.branch && <span className="text-red-500">{errors.branch}</span>}
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Password
            </span>
            <input
              type="Password"
              id="password"
              value={regData.password}
              onChange={handleChangeReg}
              className={`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
              ${errors.password ? "error" : ""}`}
              />
              {errors.password && <span className="text-red-500">{errors.password}</span>}
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Confirm Password
            </span>
            <input
              type="Password"
              id="confirmPassword"
              value={regData.confirmPassword}
              onChange={handleChangeReg}
              className={`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
              ${errors.confirmPassword ? "error" : ""}`}
              />
              {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword}</span>}
          </label>
        </form>
        <div className="text-center pt-6">
          <button
            className="rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer bg-secondary-500 text-white"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterModal;
