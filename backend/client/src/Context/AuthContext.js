import React, { createContext, useEffect, useState } from "react";
import AuthServices from "../Services/AuthServices";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  let [user, setUser] = useState({
    username: "",
    email: "",
    link: "",
    p: false,
  });

  let [isAuthenticated, setIsAuthenticated] = useState(false);
  let [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem("user");

    if (userData) {
      const parsed = JSON.parse(userData);
      setUser(parsed);
      setIsAuthenticated(true);
      setIsLoaded(true);
    }
  }, []);

  return (
    <div>
      <AuthContext.Provider
        value={{
          user,
          setUser,
          isAuthenticated,
          setIsAuthenticated,
          isLoaded,
          setIsLoaded,
        }}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
