import { StyleSheet, View, Text, Pressable, Alert, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function GoalItem(props) {
  function confirmDelete() {
    Alert.alert(
      "Xác nhận",
      "Bạn có chắc chắn muốn xóa mục này không?",
      [
        { text: "Hủy" },
        {
          text: "Xóa",
          onPress: () => {
            props.onDelete(props.id),
              Alert.alert("Thông báo", "Bạn đã xóa thành công!");
          },
        },
      ],
      { cancelable: true }
    );
  }
  return (
    <View style={styles.goalItems}>
      <Text style={styles.goalText}>{props.text}</Text>
      <Pressable
        android_ripple={{ color: "rgb(255, 255, 255)" }}
        onPress={confirmDelete}
        style={({ pressed }) => pressed && styles.pressItem}
      >
        <Ionicons
          style={styles.iconContainer}
          name="trash-bin-sharp"
          size={20}
          color="rgb(180, 87, 87)"
        />
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItems: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#35689b",
    padding: 10,
    marginTop: 15,
  },
  goalText: {
    flex: 1,
    textTransform: "capitalize",
    fontSize: 15,
    color: "white",
  },
  iconContainer: {
    flex: 1,
  },
  pressItem: {
    opacity: 0.3,
  },
});
