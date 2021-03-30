import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ScrollView,
  Button,
} from "react-native";
import StudentCard from "./StudentCard";

export default function StudentsList() {
  return (
    <ScrollView style={styles.container}>
      {/* <ScrollView> */}
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>SIT03</Text>
      </View>
      <FlatList
        style={styles.eventList}
        data={data.calls}
        keyExtractor={(item) => {
          return item.id.toString();
        }}
        renderItem={(item) => <StudentCard {...item} />}
      />
      {/* </ScrollView> */}
      <Button title="Save" style={{ padding: 5 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DCDCDC",
  },
  eventList: {
    marginTop: 20,
  },
  textContainer: {
    height: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    padding: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Cohin",
    color: "black",
  },
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
