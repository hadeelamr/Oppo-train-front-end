import React, { useState } from "react";
import LoginImage from "../image/f031e5b1caa0632b7cb3d2dc29294fc91b0a771f.png";

export default function ForgetPass() {
  const [resendClicked, setResendClicked] = useState(false);

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    minHeight: "100vh",
    paddingTop: "96px", // 6 فراغات تقريبا
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

  // 🔹 صغرنا الصورة درجتين (20% أصغر تقريبا)
  const imageStyle = {
    width: "500px", // كانت 616px
    height: "650px", // كانت 816px
    objectFit: "cover",
    borderRadius: "30px",
    opacity: 1,
    transform: "rotate(0deg)",
  };

  const resendStyle = {
    color: "#0066FF",
    cursor: "pointer",
    fontWeight: "bold",
    textDecoration: resendClicked ? "underline" : "none",
  };

  const handleResend = () => {
    setResendClicked(true);
    console.log("Resend clicked!");
    setTimeout(() => setResendClicked(false), 200);
  };

  return (
   <div style={containerStyle}>
      <div style={boxStyle}>
        <div style={formStyle}>
          <div style={backStyle} onClick={() => navigate("/")}>
            <span style={arrowStyle}>←</span> Back to Login
          </div>

          <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "10px" }}>
            Verify code
          </h1>
          <p>An authentication code has been sent to your email.</p>
          <label>Code</label>
          <input type="text" placeholder="Enter your code" style={inputStyle} />

          <p>
            Didn’t receive a code?{" "}
            <span style={resendStyle} onClick={handleResend}>
              Resend
            </span>
          </p>

          <button style={buttonStyle}>Verify</button>
        </div>

        {/* Image */}
        <img src={LoginImage} alt="login illustration" style={imageStyle} />
      </div>
    </div>
  );
}
