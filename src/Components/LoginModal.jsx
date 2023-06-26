import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginModal({closeLoginPopup}) {
  const [loginData, setLoginData] = useState({
    email: "",
    branch: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleChangeLogin = (e) => {
    setLoginData({
      ...loginData,
      [e.target.id]: e.target.value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();

    fetch("http://localhost:8000/registrations")
      .then((response) => response.json())
      .then((registrationData) => {
        const matchingUser = registrationData.find(
          (user) =>
            user.email === loginData.email &&
            user.branch === loginData.branch &&
            user.password === loginData.password
        );

        if (matchingUser) {
          console.log("Login successful");
          setErrorMessage("");
          closeLoginPopup('/');
          navigate('/travelCalculator');
          // Open the homepage or perform any necessary actions
        } else {
          setErrorMessage("Invalid credentials. Please try again!");
        }
      })
      .catch((error) => {
        console.error("Error fetching registration data:", error);
        setErrorMessage("An error occurred. Please try again later.");
      });
  };

  return (
    <div className="fixed inset-0 bg-sky-800 bg-opacity-50 backdrop-blur-sm flex justify-center items-center ">
      <div className="bg-white/50 rounded card">
        <h5 className="font-bold mt-2 pb-2 border-b border-gray-500 text-2xl text-sky-600">
          Already have an account?
        </h5>
        <form onSubmit={handleLogin}>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Email
            </span>
            <input
              type="email"
              id="email"
              value={loginData.email}
              onChange={handleChangeLogin}
              placeholder="@britam.com"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Branch
            </span>
            <input
              type="text"
              id="branch"
              value={loginData.branch}
              onChange={handleChangeLogin}
              placeholder="Branch"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Password
            </span>
            <input
              type="password"
              id="password"
              value={loginData.password}
              onChange={handleChangeLogin}
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </label>
          <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          <div className="text-center pt-6">
            <button
              type="submit"
              className="rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer bg-secondary-500 text-white"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
