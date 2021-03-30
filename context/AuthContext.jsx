import React, { useState, useEffect, createContext, useContext } from "react";
import * as SecureStore from "expo-secure-store";
import { loginUser } from "../services/firebaseService";

const initialState = {
  user: {},
};

const AuthContext = createContext(initialState);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  // const checkJwtToken = () => {
  //   checkJWT()
  //     .then((response) => {
  //       setUser(response.data.user);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const checkTokenIfExists = async () => {
  //   const token = await SecureStore.getItemAsync("secure_token");
  //   if (token) checkJwtToken();
  // };

  // useEffect(() => {
  //   checkTokenIfExists();
  // }, []);

  const login = async (email, password) => {
    const response = await loginUser(email, password);
    // await SecureStore.setItemAsync("secure_token", response.data.token);
    setUser(true);
  };

  const logout = async () => {
    // await SecureStore.deleteItemAsync("secure_token");
    setUser(false);
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
