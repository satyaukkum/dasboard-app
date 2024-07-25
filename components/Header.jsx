"use client";

import React from "react";
import "./styles.css";
import Link from "next/link";
import { IoPersonCircleOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAppContext } from "@/context";

const Header = () => {
  const { viewSidebar, toggleSidebar } = useAppContext();
  return (
    <nav className="main-header">
      <button onClick={toggleSidebar} className="sidebar-toggle-btn">
        <GiHamburgerMenu />
      </button>
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
