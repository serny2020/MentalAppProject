import React, { createContext, useState } from "react";

const CheckInContext = createContext();

const CheckInProvider = ({ children }) => {
  const [checkInData, setCheckInData] = useState({});

  const updateCheckInData = (key, value) => {
    setCheckInData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <CheckInContext.Provider value={{ checkInData, updateCheckInData }}>
      {children}
    </CheckInContext.Provider>
  );
};

export { CheckInContext, CheckInProvider };
