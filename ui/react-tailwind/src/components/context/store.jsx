import React, { createContext, useState } from 'react';

export const MyContext = createContext("");

export const MyContextProvider = ({ children }) => {
  const [payload, setPayload] = useState({}); 

  return (
    <MyContext.Provider value={{ payload, setPayload }}>
      {children}
    </MyContext.Provider>
  );
};