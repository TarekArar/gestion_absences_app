import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import AbsencesCard from "./AbsencesCard";

export default function AbsencesList({ absences }) {
  //   const getClass = async (id) => {
  //     if (!id) return null;
  //     const classRef = db.collection("Classes").doc("ppr4nYpuDah2P6zvHxRY");

  //     const classItem = await classRef.get();
  //     if (!classItem.exists) {
  //       return null;
  //     } else {
  //       // console.log('Document data:', doc.data());
  //       return classItem.data();
  //     }
  //   };

  //   const absentStudents = absences.map((el) => {
  //     const studentAbsences = el.studentAbsences;
  //     return [...studentAbsences];
  //   });

  return (
    <View style={styles.container}>
      {/* <Text>{JSON.stringify(absentStudents, null, 4)}</Text> */}
      {/* <FlatList
        style={styles.eventList}
        data={absentStudents[0]}
        keyExtractor={(item) => {
          return item.email;
        }}
        renderItem={(item) => <Text>{item.name}</Text>}
      /> */}
      <ScrollView style={styles.eventList}>
        {absences.map((absenceObject, i) =>
          absenceObject?.studentAbsences?.map((el, index) => (
            // <Text key={index}>{el.name}</Text>
            <AbsencesCard
              key={`${i}${index}`}
              module={absenceObject.module}
              name={el.name}
              imageURI={el.imageURI}
              isJustified={el.isJustified}
            />
          ))
        )}
      </ScrollView>
      {/* <Text>Class : </Text>
      <Text>{JSON.stringify(getClass("6m54EEsqIVFKBOVpfbO5"), null, 4)}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DCDCDC",
    height: 700,
  },
  eventList: {
    marginTop: 20,
  },
});
