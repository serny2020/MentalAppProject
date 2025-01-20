import React, { createContext, useState, useContext } from "react";
import toolsData from "../data/tools-data";

// Create Context
const ToolsContext = createContext();

// Provider Component
export const ToolsProvider = ({ children }) => {
  const [contextTools, setTools] = useState([]); // Initialize with toolsData
  const [selectedTools, setSelectedTools] = useState([]); // Ensure selectedTools is an array

  const addTools = (selectedToolsFromPage) => {
    const newTools = selectedToolsFromPage.filter(
      (tool) => !contextTools.includes(tool)
    );
    setTools((prevTools) => [...prevTools, ...newTools]);

    // Initialize checkbox state for new tools
    const updatedSelectedTools = { ...selectedTools };
    newTools.forEach((tool) => {
      updatedSelectedTools[tool] = false;
    });
    console.log("added new tool: ", newTools)
    setSelectedTools(updatedSelectedTools);
  };
  
  return (
    <ToolsContext.Provider value={{ contextTools, selectedTools, addTools, setSelectedTools }}>
      {children}
    </ToolsContext.Provider>
  );
};

// Hook to use the Tools Context
export const useTools = () => useContext(ToolsContext);
