import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  InteractionManager,
} from "react-native";
import ClassCard from "./ClassCard";

const ClassList = ({ classes, navigation, date }) => {
  const classesWithDate = classes.map((el, index) => ({
    id: el.id,
    module: el.module,
    groupe: el.groupe,
    startsAt: el.startsAt,
    endsAt: el.endsAt,
    navigation: navigation,
    date: date,
  }));
  return (
    <View style={styles.container}>
      {/* <Text>{JSON.stringify(classesWithDate, null, 4)}</Text> */}
      <FlatList
        style={styles.eventList}
        data={classesWithDate}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={ClassCard}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DCDCDC",
    height: 700,
  },
  eventList: {
    marginTop: 20,
  },
});

export default ClassList;
