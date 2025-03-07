import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const Auth = ({ children }) => {
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);

  const login = (username, password) => {
    if (username === "Admin" && password === "Admin") {
      setUser({ username: "Admin" });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, transactions, addTransaction }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Auth;
