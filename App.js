import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.userInteractionBlock}>
        <TextInput style={styles.textInput} placeholder="Write your goal" />
        <Button title="Create a goal" />
      </View>
      <View>
        <Text>List of your goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  userInteractionBlock: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    marginBottom: 50,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#DEF",
    padding: 5,
    width: "50%",
    overflow: "hidden",
  },
});
