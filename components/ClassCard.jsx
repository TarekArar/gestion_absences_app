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

export default function ClassCard({ item, onPress }) {
  const eventClickListener = (viewId) => {
    Alert.alert("alert", "event clicked");
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.eventBox}>
        <View style={styles.eventDate}>
          <Text style={styles.eventDay}>{item.day}</Text>
          <Text style={styles.eventMonth}>{item.month}</Text>
        </View>
        <View style={styles.eventContent}>
          <Text style={styles.eventTime}>10:00 am - 10:45 am</Text>
          <Text style={styles.userName}>eTD ANAD</Text>
          <Text style={styles.description}>2CS SIT3</Text>
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
