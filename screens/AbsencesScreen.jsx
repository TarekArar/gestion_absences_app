import React, { useState, useEffect, useMemo } from "react";
import { View, Text, ScrollView } from "react-native";
import CalendarStrip from "react-native-calendar-strip";
import AbsencesList from "../components/Absences/AbsencesList";

import * as firebase from "firebase";

const db = firebase.firestore();

export default function AbsencesScreen() {
  const [date, setDate] = useState(new Date());
  const [absences, setAbsences] = useState([]);
  const getAbsences = async () => {
    const snapshot = await db
      .collection("Absences")
      //   .where("classId", "==", "ppr4nYpuDah2P6zvHxRY")
      .where("date", "==", date)
      .get();
    const tempAbsences = [];

    snapshot.forEach((doc) => {
      tempAbsences.push(doc.data());
    });
    // tempAbsences = tempAbsences.map
    // const tempAbsences = doc.data()[0].studentAbsences;
    setAbsences(tempAbsences);
  };

  useEffect(() => {
    getAbsences();
  }, [date]);

  return (
    <ScrollView>
      <View>
        <CalendarStrip
          scrollable
          selectedDate={date}
          onDateSelected={(selectedDate) => setDate(new Date(selectedDate))}
          style={{ height: 150, paddingTop: 20, paddingBottom: 10 }}
          highlightDateContainerStyle={{ backgroundColor: "aqua", padding: 2 }}
        />
        {/* <Button onPress={logout} title="logout" /> */}
      </View>

      <AbsencesList
        //   navigation={navigation}
        absences={absences}
        //   date={date}
      />
    </ScrollView>
  );
}
