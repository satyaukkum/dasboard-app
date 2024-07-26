"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CiEdit } from "react-icons/ci";

const AppDetails = ({ params }) => {
  const router = useRouter();
  const [appData, setAppData] = useState(null);
  const { appName } = params;

  useEffect(() => {
    if (appName === "add") {
      const data = {
        appName: {
          value: "",
          editting: true,
        },
        category: {
          value: "",
          editting: true,
        },
        subCategory: {
          value: "",
          editting: true,
        },
        plan: {
          value: "",
          editting: true,
        },
      };
      setAppData(data);
    } else {
      const data = {
        appName: {
          value: "Google",
          editting: false,
        },
        category: {
          value: "Main",
          editting: false,
        },
        subCategory: {
          value: "Sub",
          editting: false,
        },
        plan: {
          value: "Free",
          editting: false,
        },
      };
      setAppData(data);
    }
  }, []);

  const goBackToApps = () => {
    router.back();
  };

  const submitEditedApp = (e) => {
    e.preventDefault();
  };

  return (
    <div className="main-body">
      <div className="flex justify-between pl-2 pr-6">
        <h1 className="apps-heading">
          {appName === "add"
            ? "Add application"
            : `AppDetails: ${appData ? appData.appName.value : ""}`}
        </h1>
        <button className="add-app-btn" onClick={goBackToApps}>
          Back
        </button>
      </div>
      {appData && (
        <form action="" className="app-edit-form" onSubmit={submitEditedApp}>
          <label htmlFor="" className="field-label">
            App name
          </label>
          <div className="input-wrapper">
            {appData.appName.editting ? (
              <input
                type="text"
                className="input"
                placeholder="Enter Something"
                value={appData.appName.value}
                onChange={(e) =>
                  setAppData({
                    ...appData,
                    appName: {
                      ...appData.appName,
                      value: e.target.value,
                    },
                  })
                }
              />
            ) : (
              <p className="text">{appData.appName.value}</p>
            )}

            <button
              type="buttom"
              className="edit-btn"
              onClick={() =>
                setAppData((prev) => ({
                  ...prev,
                  appName: {
                    ...prev.appName,
                    editting: !prev.appName.editting,
                  },
                }))
              }
            >
              <CiEdit />
            </button>
          </div>
          <label htmlFor="" className="field-label">
            Categroy
          </label>
          <div className="input-wrapper">
            {appData.category.editting ? (
              <input
                type="text"
                className="input"
                placeholder="Enter Something"
                value={appData.category.value}
                onChange={(e) =>
                  setAppData({
                    ...appData,
                    category: {
                      ...appData.category,
                      value: e.target.value,
                    },
                  })
                }
              />
            ) : (
              <p className="text">{appData.category.value}</p>
            )}

            <button
              type="buttom"
              className="edit-btn"
              onClick={() =>
                setAppData((prev) => ({
                  ...prev,
                  category: {
                    ...prev.category,
                    editting: !prev.category.editting,
                  },
                }))
              }
            >
              <CiEdit />
            </button>
          </div>
          <label htmlFor="" className="field-label">
            Sub category
          </label>
          <div className="input-wrapper">
            {appData.subCategory.editting ? (
              <input
                type="text"
                className="input"
                placeholder="Enter Something"
                value={appData.subCategory.value}
                onChange={(e) =>
                  setAppData({
                    ...appData,
                    subCategory: {
                      ...appData.subCategory,
                      value: e.target.value,
                    },
                  })
                }
              />
            ) : (
              <p className="text">{appData.subCategory.value}</p>
            )}

            <button
              type="buttom"
              className="edit-btn"
              onClick={() =>
                setAppData((prev) => ({
                  ...prev,
                  subCategory: {
                    ...prev.subCategory,
                    editting: !prev.subCategory.editting,
                  },
                }))
              }
            >
              <CiEdit />
            </button>
          </div>
          <label htmlFor="" className="field-label">
            Plan
          </label>
          <div className="input-wrapper">
            {appData.plan.editting ? (
              <input
                type="text"
                className="input"
                placeholder="Enter Something"
                value={appData.plan.value}
                onChange={(e) =>
                  setAppData({
                    ...appData,
                    plan: {
                      ...appData.plan,
                      value: e.target.value,
                    },
                  })
                }
              />
            ) : (
              <p className="text">{appData.plan.value}</p>
            )}

            <button
              type="buttom"
              className="edit-btn"
              onClick={() =>
                setAppData((prev) => ({
                  ...prev,
                  plan: {
                    ...prev.plan,
                    editting: !prev.plan.editting,
                  },
                }))
              }
            >
              <CiEdit />
            </button>
          </div>
          {appName === "add" ? (
            <button className="save-app-dtls-btn">Add App Details</button>
          ) : (
            <button className="save-app-dtls-btn">Save App Details</button>
          )}
        </form>
      )}
    </div>
  );
};

export default AppDetails;
