import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  StyleSheet,
  CheckBox,
} from "react-native";

export default function StudentCard({ item }) {
  //   const isSelected = true;
  const [isSelected, setSelection] = useState(true);
  return (
    <TouchableOpacity>
      <View style={styles.row}>
        <Image source={{ uri: item.image }} style={styles.pic} />
        <View>
          <View style={styles.nameContainer}>
            <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">
              {item.name}
            </Text>
            {/* <View style={styles.checkboxContainer}> */}
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            {/* </View> */}
          </View>
          <View style={styles.msgContainer}>
            <Text
              style={[styles.msgTxt, { color: isSelected ? "#008B8B" : "red" }]}
            >
              {isSelected ? "Present" : "Absent"}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#DCDCDC",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    padding: 10,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: "600",
    color: "#222",
    fontSize: 18,
    width: 170,
  },
  mblTxt: {
    fontWeight: "200",
    color: "#777",
    fontSize: 13,
  },
  msgContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  msgTxt: {
    fontWeight: "400",
    // color: "#008B8B",
    fontSize: 12,
    marginLeft: 15,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
});
