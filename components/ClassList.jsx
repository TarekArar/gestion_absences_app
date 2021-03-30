import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ClassCard from "./ClassCard";

const ClassList = ({ onPress, classes }) => {
  return (
    <View style={styles.container}>
      <FlatList
        enableEmptySections={true}
        style={styles.eventList}
        data={classes}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={(item) => {
          return <ClassCard item={item} onPress={onPress} />;
        }}
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
