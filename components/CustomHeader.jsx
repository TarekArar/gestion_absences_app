import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useAuthContext } from "../context/AuthContext";

export default function CustomHeader({ children }) {
  const { logout } = useAuthContext();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
      <TouchableOpacity onPress={logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    flexDirection: "row",
    height: 20,
    alignItems: "center",
    justifyContent: "space-between",
    // width: "full",
  },
  logoutText: {
    color: "red",
  },
  title: {
    fontSize: 20,
    fontWeight: "200",
  },
});
