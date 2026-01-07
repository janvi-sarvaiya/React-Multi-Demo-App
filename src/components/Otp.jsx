import React, { useState } from "react";

export default function Otp() {
  const [otp, setOtp] = useState("");
  const [length, setLength] = useState("");
  const [error, setError] = useState("");

  function otpChange() {
    let OtpGenerate = "";
    if (length < 1 || length > 10) {
      setError("Please enter valid OTP length!");
      setOtp("");
      return;
    }
    setError("");

    for (let i = 0; i < length; i++) {
      OtpGenerate += Math.floor(Math.random() * 10);
    }
    setOtp(OtpGenerate);
  }
  return (
    <div className="otp-container">
      <div className="otp-box">
        <h2>OTP Generator</h2>
        <label htmlFor="">Enter Length: (should be 1 to 10)</label>
        <input
          style={error ? { borderColor: "red" } : null}
          type="number"
          className="otp-input"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          placeholder="Enter OTP Length"
        />
        {error && <p style={{ color: "red", fontSize: "15px" }}>{error}</p>}

        <input
          type="text"
          className="otp-generator"
          value={otp}
          placeholder="Generate OTP here"
          readOnly
        />
        <button onClick={otpChange}>OTP Generate</button>
      </div>
    </div>
  );
}
