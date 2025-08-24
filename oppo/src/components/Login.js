import React from "react";
import { Link } from "react-router-dom";
import LoginImage from "../image/f031e5b1caa0632b7cb3d2dc29294fc91b0a771f.png";

export default function Login() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    minHeight: "100vh",
    paddingTop: "80px",
    backgroundColor: "#FFFFFFFF",
  };

  const boxStyle = {
    display: "flex",
    maxWidth: "1000px",
    width: "100%",
    backgroundColor: "white",
    overflow: "hidden",
  };

  const formStyle = {
    flex: 1,
    padding: "40px",
    display: "flex",
    flexDirection: "column",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    width: "100%",
    padding: "14px",
    backgroundColor: "#6B8FB5",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
  };

  const imageStyle = {
    flex: 1,
    objectFit: "contain",
    width: "100%",
    height: "100%",
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <div style={formStyle}>
          <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "10px" }}>
            Login
          </h1>
          <p style={{ marginBottom: "20px" }}>Login to access your account</p>
          
          <label>Email</label>
          <input type="email" placeholder="Enter your email" style={inputStyle} />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" style={inputStyle} />

          <div style={{ textAlign: "right", marginBottom: "20px" }}>
            <Link to="/forget" style={{ color: "#2563eb", textDecoration: "underline", fontSize: "14px" }}>
              Forgot Password
            </Link>
          </div>

          <Link to="/dashboard">
            <button style={buttonStyle}>Log in</button>
          </Link>
        </div>

        <div style={{ flex: 1 }}>
          <img src={LoginImage} alt="login illustration" style={imageStyle} />
        </div>
      </div>
    </div>
  );
}
