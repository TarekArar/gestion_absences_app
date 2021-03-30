import React from "react";
import { View } from "react-native";
import StudentsList from "../components/StudentsList";

export default function GroupeScreen({ navigation }) {
  return (
    <View>
      <StudentsList />
      {/* <Calendar /> */}
    </View>
  );
}
