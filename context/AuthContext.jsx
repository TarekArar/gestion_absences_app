import React, { useState, useEffect, createContext, useContext } from "react";
import * as SecureStore from "expo-secure-store";
import { loginUser } from "../services/firebaseService";

const initialState = {
  user: {},
};

const AuthContext = createContext(initialState);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const checkAuth = async () => {
    const uid = await SecureStore.getItemAsync("uid");
    setUser({
      uid,
    });
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await loginUser(email, password);
      await SecureStore.setItemAsync("uid", response.user.uid);
      const user = {
        uid: response.user.uid,
        email: response.user.email,
      };
      setUser(user);
      return true;
    } catch (err) {
      return false;
    }
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync("uid");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user: user,
        login: login,
        setUser: setUser,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

export { AuthProvider, useAuthContext };
