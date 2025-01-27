// Context.js
import React, { createContext, useState } from 'react';

// Step 1: Context create karo
export const GlobalContext = createContext();

// Step 2: Context ka Provider
const ContextProvider = ({ children }) => {
  const [user, setUser] = useState('Ali Huzaifa');
  const [theme, setTheme] = useState('light');

  return (
    <GlobalContext.Provider value={{ user, setUser, theme, setTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
