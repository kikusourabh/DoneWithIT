import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import {
  StyleSheet,
  Platform,
  SafeAreaView,
  View,
  FlatList,
  Text,
} from "react-native";

import color from "./app/config/color";
import Header from "./app/screens/Header";

export default function App() {
  const [todos, setTodos] = useState([
    { todo: "write script for the youtube next video", key: "1" },
    { todo: "Take camera videos for brolls", key: "2" },
    { todo: "find sound for the broll and background music", key: "3" },
  ]);

  const renderTodoItem = ({ item }) => <Text>{item.todo}</Text>;
  return (
    <View style={styles.container}>
      <Header></Header>
      <View style={styles.content}>
        {/* to form */}
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
