import { useState } from "react";
import { TextInput, StyleSheet, View, Button } from "react-native";
import { Goal } from "../../App";

interface GoalInputProps {
  onButtonPress: (newGoal: Goal) => void;
}

const GoalInput = ({ onButtonPress }: GoalInputProps) => {
  const [value, setValue] = useState("");

  const handleButtonPress = () => {
    onButtonPress({ goalText: value, id: Math.random.toString() });
    setValue("");
  };

  return (
    <View style={styles.userInteractionBlock}>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.textInput}
        placeholder="Write your goal"
      />
      <View>
        <Button onPress={handleButtonPress} title="Create a goal" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  textInput: {
    borderWidth: 1,
    borderColor: "#DEF",
    padding: 5,
    width: "60%",
    overflow: "hidden",
  },
});

export default GoalInput;
