"use client";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineVpnKey } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Register = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting");
    router.replace("/");
  };
  return (
    <main className="auth-container">
      <form action="" onSubmit={handleSubmit} className="auth-form">
        {/* <h1>SIGN UP</h1> */}
        <Image
          src="/images/gyde-logo-1.png"
          height={30}
          width={100}
          className="logo-auth"
        />
        <div className="input-wrapper">
          <span className="icon">
            <LuUser />
          </span>
          <input type="text" className="auth-form-input" />
          <span className="auth-form-label">Username</span>
        </div>
        <div className="input-wrapper">
          <span className="icon">
            <AiOutlineMail />
          </span>
          <input type="text" className="auth-form-input" />
          <span className="auth-form-label">Email</span>
        </div>
        <div className="input-wrapper">
          <span className="icon">
            <MdOutlineVpnKey />
          </span>

          <input type="text" className="auth-form-input" />
          <span className="auth-form-label">Password</span>
        </div>
        <button>Register</button>
        <div className="sign-up-link-text">
          Already have an account?{" "}
          <Link href="/login" className="link">
            Login here
          </Link>
        </div>
      </form>
    </main>
  );
};

export default Register;
