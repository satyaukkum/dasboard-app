import React from "react";
import "./styles.css";
import { Button } from "../components/ui/button";
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
        <Button>Logout</Button>
      </div>
    </nav>
  );
};

export default Header;
