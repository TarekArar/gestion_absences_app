import React from "react";
import { AuthProvider } from "./context/AuthContext";
import Navigator from "./navigation/AppNavigator";

export default function App() {
  return (
    <AuthProvider>
      <Navigator />
    </AuthProvider>
  );
}
