import React, { createContext, useState } from "react";

// Create AffirmationContext
export const AffirmationContext = createContext();

// AffirmationProvider Component
const AffirmationProvider = ({ children }) => {
  // State to hold selected affirmations and images
  const [selectedAffirmations, setSelectedAffirmations] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState(null);

  // Add affirmation to the collection (max 6 items)
  // const addAffirmation = (affirmation) => {
  //   if (selectedAffirmations.length < 6) {
  //     setSelectedAffirmations((prev) => [...prev, affirmation]);
  //   } else {
  //     alert("You can only select up to 6 affirmations.");
  //   }
  // };

  const addAffirmation = (affirmation) => {
    if (selectedAffirmations.length < 6) {
      const newAffirmation = {
        ...affirmation,
        id: `affirmation-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, // Generate a more unique ID
      };
      setSelectedAffirmations((prev) => [...prev, newAffirmation]);
    } else {
      alert("You can only select up to 6 affirmations.");
    }
  };
  
  
  

  // Delete affirmation by index
  const deleteAffirmation = (index) => {
    setSelectedAffirmations((prev) => prev.filter((_, i) => i !== index));
  };

  // Replace affirmation at a specific index
  const replaceAffirmation = (index, newAffirmation) => {
    setSelectedAffirmations((prev) =>
      prev.map((item, i) => (i === index ? newAffirmation : item))
    );
  };

  return (
    <AffirmationContext.Provider
      value={{
        selectedAffirmations,
        addAffirmation,
        deleteAffirmation,
        replaceAffirmation,
        backgroundImage,
        setBackgroundImage,
        setSelectedAffirmations,
      }}
    >
      {children}
    </AffirmationContext.Provider>
  );
};

export default AffirmationProvider;
