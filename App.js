import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import { StyleSheet, View, FlatList } from "react-native";

import color from "./app/config/color";
import Header from "./app/components/Header";
import TodoItem from "./app/components/TodoItem";
import AddTodo from "./app/components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { todo: "write script for the youtube next video", key: "1" },
    { todo: "Take camera videos for brolls", key: "2" },
    { todo: "find sound for the broll and background music", key: "3" },
  ]);

  const renderTodoItem = ({ item }) => (
    <TodoItem item={item} presshandler={presshandler}></TodoItem>
  );

  const presshandler = (key) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    setTodos((prevTodo) => {
      return [{ todo: text, key: Math.random().toString() }, ...prevTodo];
    });
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList data={todos} renderItem={renderTodoItem} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  content: {
    padding: 40,
  },
  list: { marginTop: 20 },
});
