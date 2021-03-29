import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import { AuthProvider, useAuthContext } from "./context/AuthContext";

const Stack = createStackNavigator();

export default function App() {
  const { user } = useAuthContext();

  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen
    //       name="Login"
    //       component={LoginScreen}
    //       headerShown={false}
    //     />
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <AuthProvider>
      <Stack.Navigator>
        {user == null ? (
          // No token found, user isn't signed in
          // <Stack.Screen
          //   name="SignIn"
          //   component={SignInScreen}
          //   options={{
          //     title: "Sign in",
          //     // When logging out, a pop animation feels intuitive
          //     // You can remove this if you want the default 'push' animation
          //     animationTypeForReplace: state.isSignout ? "pop" : "push",
          //   }}
          // />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            headerShown={false}
          />
        ) : (
          // User is signed in
          <Stack.Screen name="Home" component={HomeScreen} />
        )}
      </Stack.Navigator>
    </AuthProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
