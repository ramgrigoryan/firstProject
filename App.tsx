import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);

  const onButtonPress = (newGoal: string) => {
    setGoals([...goals, newGoal]);
  };

  const onGoalItemButtonPress = (removedItemIndex: number) => {
    setGoals(goals.filter((_goal, index) => index !== removedItemIndex));
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onButtonPress={onButtonPress} />
      <View style={styles.dataBlock}>
        <Text style={styles.goalBlockTitle}>
          {goals.length ? "List of your goals" : "Your list is empty"}
        </Text>
        <FlatList
          data={goals}
          renderItem={(goal) => (
            <GoalItem
              goal={goal}
              onGoalItemButtonPress={onGoalItemButtonPress}
            />
          )}
        />
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
  dataBlock: {
    flex: 5,
    paddingTop: 20,
  },
  goalBlockTitle: {
    alignSelf: "center",
  },
});
