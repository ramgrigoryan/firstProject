import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.userInteractionBlock}>
        <TextInput style={styles.textInput} placeholder="Write your goal" />
        <View style={styles.button}>
          <Button title="Create a goal" />
        </View>
      </View>
      <View style={styles.dataBlock}>
        <Text style={styles.goalBlockTitle}>List of your goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingVertical: 50,
    paddingHorizontal: 12,
    flex: 1,
  },
  userInteractionBlock: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#EEF",
  },
  dataBlock: {
    flex: 5,
    paddingTop: 20,
  },
  goalBlockTitle: {
    alignSelf: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#DEF",
    padding: 5,
    width: "60%",
    overflow: "hidden",
  },
  button: {
    fontSize: 10,
  },
});
