import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

function TodoItem({ item, presshandler }) {
  return (
    <TouchableOpacity onPress={() => presshandler(item.key)}>
      <Text style={styles.ItemStyles}>{item.todo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ItemStyles: {
    padding: 16,
    marginTop: 16,
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});
export default TodoItem;
