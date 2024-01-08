import { View, TextInput, Button, StyleSheet, Modal, Text } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Mục tiêu của bạn là gì?"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title="Thêm" onPress={addGoalHandler} />
      </View>
      <Text style={{ color: "rgb(66, 113, 163)", fontSize: 20 }}>
        Danh sách mục tiêu:
      </Text>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "rgb(0, 0, 0)",
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "rgb(0, 0, 0)",
    width: "80%",
    padding: 8,
  },
});
