"use client";

import { isUserLoggedIn } from "@/helpers/auth";

const { useState, createContext, useEffect } = require("react");

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [isloggin, setIsloggin] = useState(false);
  useEffect(() => {
    setIsloggin(isUserLoggedIn());
  }, []);

  return (
    <AuthContext.Provider value={{ isloggin, setIsloggin }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
