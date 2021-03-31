import React from "react";
import { useEffect } from "react";
import { View, ScrollView, Text, StyleSheet, Button } from "react-native";
import { useState } from "react/cjs/react.development";
import StudentsList from "../components/GroupeStudents/StudentsList";
import * as firebase from "firebase";

const db = firebase.firestore();

export default function GroupeScreen({ navigation, route }) {
  const [students, setStudents] = useState([]);
  const { groupe, classId, date, mada } = route.params;

  const retrieveStudents = async () => {
    const groupeRef = db.collection("Groupe").doc(groupe);
    const doc = await groupeRef.get();
    const tempStudents = doc.data().Students;

    setStudents(tempStudents);
  };

  useEffect(() => {
    retrieveStudents();
  }, []);

  return (
    <ScrollView>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{groupe}</Text>
      </View>
      <StudentsList
        students={students}
        classId={classId}
        date={date}
        groupe={groupe}
        module={mada}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    height: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
    padding: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Cohin",
    color: "black",
  },
});
