import { View, StyleSheet } from "react-native";
import CalendarStrip from "react-native-calendar-strip";

const Calendar = () => (
  <View style={styles.container}>
    <CalendarStrip style={{ height: 150, paddingTop: 20, paddingBottom: 10 }} />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1 },
});
