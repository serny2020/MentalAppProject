import React, { createContext, useContext, useState } from 'react';

// Create the context
const CollagingContext = createContext();

// Create the provider component
export const CollagingContextProvider = ({ children }) => {
  // Shared state
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [recommendedDream, setRecommendedDream] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  // Shared actions
  const selectAlbum = (album) => {
    setSelectedAlbum(album);
  };

  const recommendDream = (dream) => {
    setRecommendedDream(dream);
  };

  const chooseTemplate = (template) => {
    setSelectedTemplate(template);
  };

  return (
    <CollagingContext.Provider
      value={{
        selectedAlbum,
        selectAlbum,
        recommendedDream,
        recommendDream,
        selectedTemplate,
        chooseTemplate,
      }}
    >
      {children}
    </CollagingContext.Provider>
  );
};

// Custom hook for consuming the context
export const useCollagingContext = () => {
  return useContext(CollagingContext);
};
