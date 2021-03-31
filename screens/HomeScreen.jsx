import React, { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { View, Text, Button } from "react-native";
import CalendarStrip from "react-native-calendar-strip";
import ClassList from "../components/Classes/ClassList";
import * as firebase from "firebase";
import { useAuthContext } from "../context/AuthContext";

const db = firebase.firestore();

const getDayName = (date) => {
  var days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  var dayName = days[date.getDay()];
  return dayName;
};

export default function HomeScreen({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [classes, setClasses] = useState([]);

  const { user, logout } = useAuthContext();

  const retrieverClasses = async () => {
    const classesRef = db.collection("Classes");
    const snapshot = await classesRef.where("profId", "==", user.uid).get();

    const tempClasses = [];
    snapshot.forEach((doc) => {
      tempClasses.push({ id: doc.id, ...doc.data() });
    });
    // const tempClasses = await getProfessorClasses(user.email);
    setClasses(tempClasses);
  };

  useEffect(() => {
    retrieverClasses();
  }, []);

  const selectedClasses = useMemo(() => {
    // const month = date.getMonth() + 1;
    const day = getDayName(date);

    return classes.filter((el) => el.day == day);
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
        navigation={navigation}
        classes={selectedClasses}
        date={date}
      />
    </View>
  );
}
