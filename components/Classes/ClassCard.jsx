import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function ClassCard({ item }) {
  const navigateToGroupe = () => {
    item.navigation.navigate("Groupe", {
      groupe: item.groupe,
      mada: item.module,
      classId: item.id,
      date: item.date,
    });
  };

  return (
    <TouchableOpacity onPress={navigateToGroupe}>
      <View style={styles.eventBox}>
        <View style={styles.eventContent}>
          <Text style={styles.eventTime}>
            {item.startsAt} - {item.endsAt}
          </Text>
          <Text style={styles.userName}>{item.module}</Text>
          <Text style={styles.description}>Groupe: {item.groupe}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  eventBox: {
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    paddingBottom: 5,
    flexDirection: "row",
  },
  eventDate: {
    flexDirection: "column",
  },
  eventDay: {
    fontSize: 50,
    color: "#0099FF",
    fontWeight: "600",
  },
  eventMonth: {
    fontSize: 16,
    color: "#0099FF",
    fontWeight: "600",
  },
  eventContent: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 10,
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
  },
  description: {
    fontSize: 15,
    color: "#646464",
  },
  eventTime: {
    fontSize: 18,
    color: "#151515",
  },
  userName: {
    fontSize: 16,
    color: "#151515",
  },
});
