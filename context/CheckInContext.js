import React, { createContext, useState, useContext } from "react";

const CheckInContext = createContext();

const CheckInProvider = ({ children }) => {
  const [checkInData, setCheckInData] = useState({ 
    mood: [],    // Default values
    emotions: [],
    causes: [],
  });

  const updateCheckInData = (key, value) => {
    setCheckInData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <CheckInContext.Provider value={{ ...checkInData, updateCheckInData }}>
      {children}
    </CheckInContext.Provider>
  );
};
// Custom hook to use the CheckInContext
const useCheckInContext = () => {
  const context = useContext(CheckInContext);
  if (!context) {
    throw new Error("useCheckInContext must be used within a CheckInProvider");
  }
  return context;
};

export { CheckInContext, CheckInProvider, useCheckInContext };
