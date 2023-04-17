import { createContext, useContext } from "react";
import AuthStorageStorage from "../utils/authStorage";

const AuthStorageContext = createContext();

const AuthStorageProvider = ({ children }) => {
  const authStorageStorage = new AuthStorageStorage();
  return (
    <AuthStorageContext.Provider value={authStorageStorage}>
      {children}
    </AuthStorageContext.Provider>
  );
};

const useAuthStorage = () => {
  const context = useContext(AuthStorageContext);
  if (!context) {
    throw new Error("useAuthStorage must be used within a AuthStorageProvider");
  }
  return context;
};

export { AuthStorageProvider, useAuthStorage };
