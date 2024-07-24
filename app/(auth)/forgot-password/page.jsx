"use client";
import React, { useRef, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineVpnKey } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const [showOtpInput, setshowOtpInput] = useState(false);
  const router = useRouter();
  const inputRefs = useRef([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sending email");
    setshowOtpInput(true);
    // router.replace("/");
  };

  const focusNext = () => {
    for (let i = 0; i < inputRefs.current.length; i++) {
      if (
        document.activeElement === inputRefs.current[i] &&
        i < inputRefs.current.length - 1
      ) {
        inputRefs.current[i + 1].focus();
        break;
      }
    }
  };
  return (
    <main className="auth-container">
      <form action="" onSubmit={handleSubmit} className="auth-form">
        <h2>Verify your email</h2>

        <div className="input-wrapper">
          <span className="icon">
            <AiOutlineMail />
          </span>
          <input type="text" className="auth-form-input" />
          <span className="auth-form-label">Email</span>
        </div>

        <button>Submit</button>
        {showOtpInput && <h3>Verification email sent to your email address</h3>}

        {/* <h3>Enter the OTP sent to your email address</h3>
        <div className="otp-inputs-container">
          <input
            type="text"
            className="auth-form-input otp-input"
            maxLength="1"
            ref={(el) => (inputRefs.current[0] = el)}
            onKeyUp={focusNext}
          />
          <input
            type="text"
            className="auth-form-input otp-input"
            maxLength="1"
            ref={(el) => (inputRefs.current[1] = el)}
            onKeyUp={focusNext}
          />
          <input
            type="text"
            className="auth-form-input otp-input"
            maxLength="1"
            ref={(el) => (inputRefs.current[2] = el)}
            onKeyUp={focusNext}
          />
          <input
            type="text"
            className="auth-form-input otp-input"
            maxLength="1"
            ref={(el) => (inputRefs.current[3] = el)}
          />
        </div> */}
      </form>
    </main>
  );
};

export default ForgotPassword;
