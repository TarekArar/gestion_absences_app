import React, { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { View, Text } from "react-native";
import CalendarStrip from "react-native-calendar-strip";
import ClassList from "../components/ClassList";
import * as firebase from "firebase";

const db = firebase.firestore();

// import { db } from "../services/firebaseService";

export default function HomeScreen({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [classes, setClasses] = useState([]);

  const retrieverClasses = async () => {
    const classesRef = db.collection("cities");
    const snapshot = await classesRef.get();
    const tempClasses = [];
    snapshot.forEach((doc) => {
      tempClasses.push(doc.data());
      //   console.log(doc.id, "=>", doc.data());
    });
    setClasses(tempClasses);
  };

  useEffect(() => {
    retrieverClasses();
  }, [date]);

  const selectedClasses = useMemo(() => {
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return data.filter((el) => el.day == day && el.month == month);
  }, [date]);
  return (
    <View>
      <View>
        <CalendarStrip
          scrollable
          selectedDate={date}
          onDateSelected={(selectedDate) => setDate(new Date(selectedDate))}
          style={{ height: 150, paddingTop: 20, paddingBottom: 10 }}
          highlightDateContainerStyle={{ backgroundColor: "aqua", padding: 2 }}
        />
      </View>
      <ClassList
        onPress={() => navigation.navigate("Groupe")}
        classes={selectedClasses}
      />
      <Text>{JSON.stringify(classes)}</Text>
    </View>
  );
}

const data = [
  { id: 1, day: 29, month: 3 },
  { id: 10, day: 30, month: 3 },
  { id: 2, day: 30, month: 3 },
  { id: 3, day: 30, month: 3 },
  { id: 4, day: 31, month: 3 },
  { id: 5, day: 31, month: 3 },
  { id: 6, day: 1, month: 4 },
  { id: 7, day: 1, month: 4 },
  { id: 8, day: 2, month: 4 },
  { id: 9, day: 2, month: 4 },
];
