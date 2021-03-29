import React from "react";
import { View, Text, Button } from "native-base";
import SessionList from "../components/SessionList";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <SessionList />
    </View>
  );
}
