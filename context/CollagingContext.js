import React, { createContext, useContext, useState } from 'react';

// Create the context
const CollagingContext = createContext();

// Create the provider component
export const CollagingContextProvider = ({ children }) => {
  // Shared states
  const [templates, setTemplates] = useState({
    "Dream House": [],
    "Dream Life": [],
    "Dream Social Circle": [],
    "Wishlist": [],
  });
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  // Shared actions
  const updateTemplates = (section, updatedTemplates) => {
    console.log("Updating section:", section);

    setTemplates((prev) => ({
      ...prev,
      [section]: updatedTemplates,
    }));
  };

  const selectPhotos = (photos) => {
    setSelectedPhotos(photos);
  };

  const chooseTemplate = (template) => {
    setSelectedTemplate(template);
  };

  return (
    <CollagingContext.Provider
      value={{
        templates,
        updateTemplates,
        selectedPhotos,
        selectPhotos,
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
