import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";

export default function App() {
  const [newGoal, setNewGoal] = useState("");
  const [goals, setGoals] = useState([]);
  return (
    <View style={styles.appContainer}>
      <View style={styles.userInteractionBlock}>
        <TextInput
          value={newGoal}
          onChangeText={setNewGoal}
          style={styles.textInput}
          placeholder="Write your goal"
        />
        <View style={styles.button}>
          <Button
            onPress={() => {
              setGoals([...goals, newGoal]);
              setNewGoal("");
            }}
            title="Create a goal"
          />
        </View>
      </View>
      <View style={styles.dataBlock}>
        <ScrollView>
          <Text style={styles.goalBlockTitle}>
            {goals.length ? "List of your goals" : "Your list is empty"}
          </Text>
          {goals.map((goal, index) => (
            <View style={styles.goal} key={index}>
              <Text style={styles.goalText}>{goal}</Text>
              <Button
                onPress={() => {
                  setGoals(goals.filter((_, itemIndex) => itemIndex !== index));
                }}
                title="Remove goal"
              ></Button>
            </View>
          ))}
        </ScrollView>
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
  goal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 5,
    padding: 10,
    backgroundColor: "#BAD",
    borderRadius: 8,
  },
  goalText: {
    color: "#FFF",
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
