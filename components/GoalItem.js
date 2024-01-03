import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItems}>
      <Pressable
        onPress={props.onDelete.bind(this, props.id)}
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
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#336699",
    padding: 10,
    width: "97%",
  },
  goalText: {
    color: "white",
    fontSize: 15,
  },
  pressItem: {
    opacity: 0.3,
  },
});
