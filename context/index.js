"use client";

import { createContext, useState, useContext } from "react";

const AppContext = createContext({
  viewSidebar: false,
  toggleSidebar: () => {},
});

export function AppWrapper({ children }) {
  let [state, setState] = useState({
    viewSidebar: false,
  });

  const toggleSidebar = () => {
    setState((prev) => ({ ...prev, viewSidebar: !state.viewSidebar }));
  };

  return (
    <AppContext.Provider
      value={{ viewSidebar: state.viewSidebar, toggleSidebar: toggleSidebar }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
