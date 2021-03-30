import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import GroupeScreen from "../screens/GroupeScreen";
import { useAuthContext } from "../context/AuthContext";

const Stack = createStackNavigator();

export default function Navigator() {
  const { user } = useAuthContext();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* {user == null || user == {} ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : ( */}
        {/* <> */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "My Classes",
          }}
        />
        <Stack.Screen name="Groupe" component={GroupeScreen} />
        {/* </> */}
        {/* //)} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
