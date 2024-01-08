import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Alert,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startGoalHandler() {
    setModalIsVisible(true);
  }

  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText.trim() === "") {
      Alert.alert("Thông báo", "Vui lòng nhập thông tin");
    } else {
      setCourseGoals((currentCourseGoals) => [
        ...currentCourseGoals,
        { text: enteredGoalText, id: Math.random().toString() },
      ]);
      endGoalHandler();
    }
  }

  function endGoalHandler() {
    setModalIsVisible(false);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.appContainer}>
        <Text style={styles.logoContainer}>Fhux</Text>
        <TouchableOpacity onPress={startGoalHandler}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Thêm mục tiêu</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.line} />
        <Text style={{ color: "rgb(60, 90, 123)", fontSize: 22 }}>
          Danh sách mục tiêu:
        </Text>
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <View />
          <FlatList
            data={courseGoals}
            alwaysBounceVertical={false}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDelete={deleteGoalHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 16,
    backgroundColor: "#cccccc",
  },
  button: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    width: "100%",
    borderWidth: 3,
    borderRadius: 15,
    borderColor: "#3e6bc6",
  },
  buttonText: {
    color: "#3e6bc6",
    textAlign: "center",
    fontSize: 20,
  },
  goalsContainer: {
    flex: 7,
  },
  logoContainer: {
    textAlign: "center",
    color: "#3e6bc6",
    fontSize: 50,
    marginBottom: 10,
  },
  line: {
    marginTop: 15,
    marginBottom: 10,
    borderBottomWidth: 3,
    borderBottomColor: "rgb(100, 100, 100)",
  },
});
