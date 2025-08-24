import React from "react";
import LoginImage from "../image/f031e5b1caa0632b7cb3d2dc29294fc91b0a771f.png";

export default function Login() {
  return (
    <div className="flex items-start justify-center min-h-screen bg-gray-50 px-4 pt-20">
      <div className="flex flex-col md:flex-row items-start justify-center bg-white rounded-2xl shadow-lg max-w-[1000px] w-full">

        {/* Left Side - Login Form */}
        <div className="flex flex-col justify-start px-12 py-12 md:w-1/2">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
            Login
          </h1>
          <p className="text-gray-600 mb-8">
            Login to access your travelwise account
          </p>

          {/* Email */}
          <div className="mb-4">
            <label className="text-sm text-gray-700 mb-1 block">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="text-sm text-gray-700 mb-1 block">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end mb-6">
            <a
              href="#"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password
            </a>
          </div>

          {/* Button */}
          <button
            style={{ width: 445, height: 56, gap: 16, opacity: 1 }}
            className="bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Log in
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-end items-center px-6 py-12">
          <img
            src={LoginImage}
            alt="login illustration"
            className="w-64"
          />
        </div>

      </div>
    </div>
  );
}
