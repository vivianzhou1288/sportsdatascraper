"use client";
import { createContext, useContext, useState, useEffect } from "react";
const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    // Get initial data from localStorage if it exists
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("data");
      return savedData ? JSON.parse(savedData) : {};
    } // Parse JSON if data exists
    return {};
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("data", JSON.stringify(data));
    }
  }, [data]);

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AppAuth = () => useContext(AppContext);
