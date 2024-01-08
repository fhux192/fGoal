import { StyleSheet, View, Text, Pressable, Alert } from "react-native";

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
      { cancelable: false }
    );
  }

  return (
    <View style={styles.goalItems}>
      <Pressable
        android_ripple={{ color: "rgb(255, 255, 255)" }}
        onPress={confirmDelete}
        style={({ pressed }) => pressed && styles.pressItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItems: {
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: "#35689b",
    padding: 10,
    width: "97%",
  },
  goalText: {
    color: "white",
    fontSize: 15,
    textTransform: "capitalize",
  },
  pressItem: {
    opacity: 0.3,
  },
});
