"use client";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineVpnKey } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting");
    router.replace("/");
  };
  return (
    <main className="auth-container">
      <form action="" onSubmit={handleSubmit} className="auth-form">
        <h1>LOGIN</h1>
        {/* <div className='input-wrapper'>
          <span className='icon'><LuUser /></span>
          <input type="text" className='auth-form-input' />
          <span className='auth-form-label'>Username</span>
        </div> */}
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
        <div className="sign-up-link-text mt-2 self-start">
          <Link href="/forgot-password" className="link">
            Forgot password?
          </Link>
        </div>
        <button>Submit</button>
        <div className="sign-up-link-text">
          Don't have an account?{" "}
          <Link href="/register" className="link">
            Create One
          </Link>
        </div>
      </form>
    </main>
  );
};

export default Login;
