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
} from "@/components/ui/dropdown-menu";

import { useAppContext } from "@/context";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const Header = () => {
  const { viewSidebar, toggleSidebar } = useAppContext();
  const router = useRouter();

  const logoutUser = () => {
    localStorage.removeItem("token");
    router.replace("/login");
  };
  return (
    <nav className="main-header">
      <button onClick={toggleSidebar} className="sidebar-toggle-btn">
        <GiHamburgerMenu />
      </button>
      <div>Navbar</div>
      <div className="header-btns">
        {/* <Link className="profile-icon" href="/">
          <IoPersonCircleOutline className="icon" />
        </Link> */}
        <DropdownMenu>
          <DropdownMenuTrigger className="profile-dropdown-trigger-btn">
            <IoPersonCircleOutline className="icon" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="profile-dropdown-menu">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem className="logout-btn" onClick={logoutUser}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Header;
