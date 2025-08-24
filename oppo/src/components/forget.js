import React from "react";
import LoginImage from "../image/f031e5b1caa0632b7cb3d2dc29294fc91b0a771f.png";

import Login from "./Login";
export default function Forget() {
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
    gap: "48px",
  };

  const formStyle = {
    width: "460px",
    height: "312px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "12px",
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

  const backStyle = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    marginBottom: "10px",
    color: "#6B8FB5",
    fontWeight: "bold",
    fontSize: "14px",
  };

  const arrowStyle = {
    marginRight: "8px",
    fontSize: "16px",
  };

  const imageStyle = {
    width: "616px",
    height: "816px",
    objectFit: "cover",
    borderRadius: "30px",
    opacity: 1,
    transform: "rotate(0deg)",
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        {/* Form */}
        <div style={formStyle}>
          {/* Back to Login */}
          <div
            style={backStyle}
            onClick={() => (window.location.href = "/Login")}
          >
            <span style={arrowStyle}>←</span> Back to Login
          </div>

          <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "10px" }}>
            Forgot your password?
          </h1>
          <p>Enter your email so you can reset a new password</p>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" style={inputStyle} />
          <button style={buttonStyle}>Reset the password</button>
        </div>

        {/* Image */}
        <img src={LoginImage} alt="login illustration" style={imageStyle} />
      </div>
    </div>
  );
}
