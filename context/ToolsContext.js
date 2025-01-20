import React, { createContext, useState, useContext } from "react";

// Create Context
const ToolsContext = createContext();

// Provider Component
export const ToolsProvider = ({ children }) => {
  const [tools, setTools] = useState([]);

  const addTools = (newTools) => {
    setTools((prevTools) => {
      const toolNames = prevTools.map((tool) => tool.name);
      const uniqueTools = newTools.filter((tool) => !toolNames.includes(tool.name));
      return [...prevTools, ...uniqueTools];
    });
  };

  return (
    <ToolsContext.Provider value={{ tools, addTools }}>
      {children}
    </ToolsContext.Provider>
  );
};

// Hook to use the Tools Context
export const useTools = () => useContext(ToolsContext);
