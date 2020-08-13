import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import color from "../config/color";

function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");
  const chanageHandler = (text_val) => {
    setText(text_val);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo"
        onChangeText={chanageHandler}
      />
      <Button onPress={() => submitHandler(text)} title="ADD TODO" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: color.primary,
  },
});
export default AddTodo;
