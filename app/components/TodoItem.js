import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import color from "../config/color";

function TodoItem({ item, presshandler }) {
  return (
    <TouchableOpacity onPress={() => presshandler(item.key)}>
      <View style={styles.ItemStyles}>
        <Icon name="delete" color={color.blackgrey} />
        <Text style={styles.itemText}>{item.todo}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ItemStyles: {
    flexDirection: "row",
    padding: 16,
    marginTop: 16,
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    alignItems: "flex-end",
    alignContent: "center",
  },
  itemText: {
    color: color.blackgrey,
    marginLeft: 10,
  },
});
export default TodoItem;
