import React, { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../utils/firebase.config";

export const UserContext = createContext({
  activeUser: null,
  setActiveUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setActiveUser(user);
    });
    return () => unsubscribe();
  }, []);
  const value = { activeUser, setActiveUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
