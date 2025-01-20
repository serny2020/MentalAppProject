import React, { createContext, useState } from "react";

// Create AffirmationContext
export const AffirmationContext = createContext();

// AffirmationProvider Component
const AffirmationProvider = ({ children }) => {
  // State to hold the affirmation images
  const [images, setImages] = useState([null, null, null, null, null, null]);

  return (
    <AffirmationContext.Provider value={{ images, setImages }}>
      {children}
    </AffirmationContext.Provider>
  );
};

export default AffirmationProvider;
