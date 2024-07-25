"use client";

import React from "react";
import "./styles.css";
import Image from "next/image";
import { MdDashboard } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { IoPersonAddSharp } from "react-icons/io5";
import { GrAppsRounded } from "react-icons/gr";
import { FaChartBar } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppContext } from "@/context";

const Sidebar = () => {
  const pathname = usePathname();
  const { viewSidebar, toggleSidebar } = useAppContext();
  console.log(pathname);
  return (
    <aside className={`main-sidebar ${viewSidebar ? "slide-in" : "slide-out"}`}>
      <div className="sidebar-top">
        <Link href="/" className="logo-image">
          <Image src="/images/gyde-logo-1.png" width="80" height={20} alt="" />
        </Link>
        <button
          className="close-btn"
          id="sidebarCollapse"
          onClick={toggleSidebar}
        >
          <AiOutlineClose />
        </button>
      </div>
      <nav className="sidebar-nav">
        <ul id="sidebarnav">
          <li className="nav-small-cap">
            <span className="hide-menu">Home</span>
          </li>
          <li className="sidebar-item">
            <Link
              className={`sidebar-link ${pathname === "/" ? "active" : ""}`}
              href="/"
              aria-expanded="false"
            >
              <FaChartBar className="icon" />

              <span className="hide-menu">Dashboard</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link
              className={`sidebar-link ${
                pathname.includes("/applications") ? "active" : ""
              }`}
              href="/applications"
              aria-expanded="false"
            >
              <GrAppsRounded className="icon" />

              <span className="hide-menu">Applications</span>
            </Link>
          </li>

          <li className="nav-small-cap">
            <span className="hide-menu">AUTH</span>
          </li>
          <li className="sidebar-item">
            <Link className="sidebar-link" href="/login" aria-expanded="false">
              <BiLogOut className="icon" />
              <span className="hide-menu">Logout</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link
              className="sidebar-link"
              href="/register"
              aria-expanded="false"
            >
              <IoPersonAddSharp className="icon" />
              <span className="hide-menu">Register</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
