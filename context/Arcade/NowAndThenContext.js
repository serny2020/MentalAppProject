import React, { createContext, useState, useContext } from "react";

// Create the context
const NowAndThenContext = createContext();

// Provider component to wrap the app
export const NowAndThenProvider = ({ children }) => {
  const [bumpSpeed, setBumpSpeed] = useState(2); // Default speed
  const [ballColor, setBallColor] = useState("#ff4081");
  const [ballType, setBallType] = useState("color"); // 'color' or ball id

  return (
    <NowAndThenContext.Provider value={{ bumpSpeed, setBumpSpeed, ballColor, setBallColor, ballType, setBallType }}>
      {children}
    </NowAndThenContext.Provider>
  );
};

// Hook for easy context consumption
export const useNowAndThen = () => useContext(NowAndThenContext);
