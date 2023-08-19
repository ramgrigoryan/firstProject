import { Pressable, StyleSheet, Text, View } from "react-native";
import { Goal } from "../../App";

interface GoalItemProps {
  goal: {
    item: Goal;
  };
  onGoalItemButtonPress: (removedItemIndex: string) => void;
}

const GoalItem = ({ goal, onGoalItemButtonPress }: GoalItemProps) => (
  <Pressable
    android_ripple={{ color: "#BA9" }}
    style={({ pressed }) => pressed && styles.pressedItem}
    onPress={() => onGoalItemButtonPress(goal.item.id)}
  >
    <View style={styles.goal} key={goal.item.id}>
      <Text style={styles.goalText}>{goal.item.goalText}</Text>
      {/* <Button
        onPress={() => onGoalItemButtonPress(goal.index)}
        title="Remove goal"
      /> */}
    </View>
  </Pressable>
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
  pressedItem: {
    opacity: 0.8,
    backgroundColor: "#BAA",
  },
});

export default GoalItem;
