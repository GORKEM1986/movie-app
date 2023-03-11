import React, { createContext, useEffect, useState } from "react";
import { userObserver } from "../auth/firebase";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [myUser, setMyUser] = useState(false);


  useEffect(() => {
    userObserver(setMyUser);
  }, []);

  return <AuthContext.Provider value={{ myUser }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
