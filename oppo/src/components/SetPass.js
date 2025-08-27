import React, { useState } from "react";
import LoginImage from "../image/1741d0ea9f230abbb9106ced8ac4a3e47af64a21.png";

export default function SetPass() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // success | error

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    minHeight: "100vh",
    paddingTop: "96px",
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
    height: "auto",
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

  const imageStyle = {
    width: "500px",
    height: "650px",
    objectFit: "cover",
    borderRadius: "30px",
    opacity: 1,
    transform: "rotate(0deg)",
  };

  // 🔹 معالجة زر "Set Password"
  const handleSubmit = () => {
    if (!password || !confirmPassword) {
      setMessage("⚠️ Both fields are required");
      setMessageType("error");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("❌ Passwords do not match");
      setMessageType("error");
      return;
    }

    setMessage("✅ Password updated successfully");
    setMessageType("success");

    // ممكن تضيف هون API call لإرسال الباس للسيرفر
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        {/* Form */}
        <div style={formStyle}>
          <h1
            style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "10px" }}
          >
            Set a password
          </h1>
          <p>Your previous password has been reseted.</p>
          <p>Please set a new password for your account.</p>

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />

          <label>Re-enter password</label>
          <input
            type="password"
            placeholder="Re-enter your new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={inputStyle}
          />

          <button style={buttonStyle} onClick={handleSubmit}>
            Set password
          </button>

          {/* رسالة التنبيه */}
          {message && (
            <p
              style={{
                marginTop: "15px",
                fontWeight: "bold",
                color: messageType === "success" ? "green" : "red",
              }}
            >
              {message}
            </p>
          )}
        </div>

        {/* Image */}
        <img src={LoginImage} alt="login illustration" style={imageStyle} />
      </div>
    </div>
  );
}
