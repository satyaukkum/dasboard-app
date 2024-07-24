import React from "react";
import "./styles.css";
import Link from "next/link";
import { IoPersonCircleOutline } from "react-icons/io5";

const Header = () => {
  return (
    <nav className="main-header">
      <div>Navbar</div>
      <div className="header-btns">
        <Link className="profile-icon" href="/">
          <IoPersonCircleOutline className="icon" />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
