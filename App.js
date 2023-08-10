import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container1}>
      <Text style={styles.dummyText}>World</Text>
      <Button title="Submit" />
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#EDF",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#74AB16",
    padding: 16,
  },
});
