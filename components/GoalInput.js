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
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <View style={styles.box}>
          <TextInput
            style={styles.textInput}
            placeholder="Mục tiêu của bạn là gì?"
            onChangeText={goalInputHandler}
            value={enteredGoalText}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Thêm" color="#3e6bc6" onPress={addGoalHandler} />
            </View>
            <View style={styles.button}>
              <Button title="Hủy" color="#c63e3e" onPress={props.onCancel} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  button: {
    width: "30%",
    marginHorizontal: 5,
  },
  box: {
    backgroundColor: "rgb(240, 240, 240)",
    borderColor: "rgb(60, 90, 123)",
    borderWidth: 3,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    width: 350,
    height: 150,
  },
  buttonContainer: {
    marginTop: 15,
    flexDirection: "row",
  },
  inputContainer: {
    backgroundColor: "#cccccc",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 3,
    borderRadius: 50,
    borderColor: "rgb(0, 0, 0)",
    marginTop: 12,
    width: "80%",
    padding: 10,
    fontSize: 20,
  },
});
