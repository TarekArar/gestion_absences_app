import React, { useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ScrollView,
  Button,
} from "react-native";
import StudentCard from "./StudentCard";
import * as firebase from "firebase";
import { useAuthContext } from "../../context/AuthContext";
import { useEffect } from "react";
import { useMemo } from "react";
import * as Progress from "react-native-progress";

const db = firebase.firestore();

export default function StudentsList({ students, classId, date }) {
  const [absences, setAbsences] = useState([]);
  const [loading, setLoading] = useState(true);

  const studentsWithIds = students.map((el, index) => ({
    id: index,
    name: el.name,
    imageURI: el.imageURI || null,
    email: el.email,
    absent: absences.find((abs) => abs.email == el.email) ? true : false,
  }));
  // useMemo(
  //   () =>
  //   [students, absences]
  // );

  useEffect(() => {
    getAbsences();
    setTimeout(() => {
      setLoading(false);
    }, 50);
  }, []);

  const getAbsences = async () => {
    const snapshot = await db
      .collection("Absences")
      .where("classId", "==", classId)
      .where("date", "==", date)
      .get();
    const tempAbsences = [];

    snapshot.forEach((doc) => {
      tempAbsences.push(doc.data());
      // console.log(doc.id, '=>', doc.data());
    });
    // const tempAbsences = doc.data()[0].studentAbsences;
    setAbsences(tempAbsences[0].studentAbsences);
  };

  const toggleAbsence = (email) => {
    let student = absences?.find((el) => el.email == email);
    if (student) setAbsences(absences.filter((el) => el.email != email));
    else {
      student = studentsWithIds?.find((el) => el.email == email);
      const newAbsence = {
        // id: student.id,
        name: student.name,
        imageURI: student.imageURI,
        email: student.email,
        isJustified: false,
      };
      const tempAbsentStudent = [...absences, newAbsence];
      setAbsences(tempAbsentStudent);
    }
  };

  const saveAbsences = async () => {
    const snapshot = await db
      .collection("Absences")
      .where("classId", "==", classId)
      .where("date", "==", date)
      .get();
    if (snapshot.empty) {
      await db.collection("Absences").add({
        classId: classId,
        date: date,
        studentAbsences: absences,
      });
    } else {
      await db.collection("Absences").doc(snapshot.id).set({
        classId: classId,
        date: date,
        studentAbsences: absences,
      });
    }
    // const res = await db.collection("cities").add({
    //   name: "Tokyo",
    //   country: "Japan",
    // });
  };

  // if (!studentsWithIds)
  //   return (
  //     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
  //       <Progress.CircleSnail color={["red", "green", "blue"]} />
  //     </View>
  //   );

  return (
    <ScrollView style={styles.container}>
      {/* <ScrollView> */}

      <FlatList
        style={styles.eventList}
        data={studentsWithIds}
        keyExtractor={(item) => {
          return item.id.toString();
        }}
        renderItem={(item) => (
          <StudentCard {...item} toggleAbsence={toggleAbsence} />
        )}
      />
      {/* </ScrollView> */}
      <Button title="Save" style={{ padding: 5 }} onPress={saveAbsences} />
      {/* <Text>{JSON.stringify(absences, null, 4)}</Text> */}
    </ScrollView>
  );
  // : (
  //   <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
  //     <Progress.CircleSnail color={["red", "green", "blue"]} />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DCDCDC",
  },
  // eventList: {
  //   marginTop: 20,
  // },
});

const data = {
  calls: [
    {
      id: 1,
      name: "Mark Doe",
      image: "https://bootdey.com/img/Content/avatar/avatar7.png",
    },
    {
      id: 2,
      name: "Clark Man",
      image: "https://bootdey.com/img/Content/avatar/avatar6.png",
    },
    {
      id: 3,
      name: "Jaden Boor",
      image: "https://bootdey.com/img/Content/avatar/avatar5.png",
    },
    {
      id: 4,
      name: "Srick Tree",
      image: "https://bootdey.com/img/Content/avatar/avatar4.png",
    },
    {
      id: 5,
      name: "Erick Doe",
      image: "https://bootdey.com/img/Content/avatar/avatar3.png",
    },
    {
      id: 6,
      name: "Francis Doe",
      image: "https://bootdey.com/img/Content/avatar/avatar2.png",
    },
    {
      id: 8,
      name: "Matilde Doe",
      image: "https://bootdey.com/img/Content/avatar/avatar1.png",
    },
    {
      id: 9,
      name: "John Doe",
      image: "https://bootdey.com/img/Content/avatar/avatar4.png",
    },
    {
      id: 10,
      name: "Fermod Doe",
      image: "https://bootdey.com/img/Content/avatar/avatar7.png",
    },
    {
      id: 11,
      name: "Danny Doe",
      image: "https://bootdey.com/img/Content/avatar/avatar1.png",
    },
  ],
};
