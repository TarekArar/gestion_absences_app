import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import GroupeScreen from "../screens/GroupeScreen";
import { useAuthContext } from "../context/AuthContext";
import AbsencesScreen from "../screens/AbsencesScreen";
import CustomHeader from "../components/CustomHeader";

const Stack = createStackNavigator();

export default function Navigator() {
  const { user } = useAuthContext();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {user == null ? (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        ) : user.uid == "pztU6KOJPJbl1HLqJAOArlO3DuB3" ? (
          <>
            <Stack.Screen
              name="Absences"
              component={AbsencesScreen}
              // options={{
              //   title: "Liste des absences",
              // }}
              options={{
                title: "Liste des absences",
                headerTitle: (props) => <CustomHeader {...props} />,
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: "My Classes",
                headerTitle: (props) => <CustomHeader {...props} />,
              }}
            />
            <Stack.Screen name="Groupe" component={GroupeScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
