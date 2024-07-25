import React from "react";
import { FaPlus } from "react-icons/fa6";

//css
import "../../globals.css";
import Link from "next/link";

const Applications = () => {
  const apps = [
    {
      name: "Google",
      category: "Main",
      subCategory: "Sub",
      plan: "Free",
    },
    {
      name: "Facebook",
      category: "Main",
      subCategory: "Sub",
      plan: "Paid",
    },
    {
      name: "Gyde",
      category: "Main",
      subCategory: "Sub",
      plan: "Paid",
    },
    {
      name: "Kido",
      category: "Main",
      subCategory: "Sub",
      plan: "Free",
    },
  ];
  return (
    <main className="main-body">
      <div className="flex justify-between pl-2 pr-6">
        <h1 className="apps-heading">Applications</h1>
        <button className="add-app-btn">
          <FaPlus />
          Add Application
        </button>
      </div>
      <ul className="apps-list">
        <li className="app-item header">
          <p className="name">App name</p>
          <p className="category">Category</p>
          <p className="sub-category">Sub-category</p>
          <p className="plan">Plan</p>
        </li>
        {apps.map((app, index) => {
          return (
            <li key={index} className="app-item">
              <p className="name">
                <Link href={`/applications/${app.name}`}>{app.name}</Link>
              </p>
              <p className="category">{app.category}</p>
              <p className="sub-category">{app.subCategory}</p>
              <p className="plan">{app.plan}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Applications;
