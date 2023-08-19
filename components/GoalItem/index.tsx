import { Button, StyleSheet, Text, View } from "react-native";

interface GoalItemProps {
  goal: {
    index: number;
    item: string;
  };
  onGoalItemButtonPress: (removedItemIndex: number) => void;
}

const GoalItem = ({ goal, onGoalItemButtonPress }: GoalItemProps) => (
  <View style={styles.goal} key={goal.index}>
    <Text style={styles.goalText}>{goal.item}</Text>
    <Button
      onPress={() => onGoalItemButtonPress(goal.index)}
      title="Remove goal"
    />
  </View>
);

const styles = StyleSheet.create({
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
});

export default GoalItem;
