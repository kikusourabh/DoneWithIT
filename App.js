import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Constants from "expo-constants";
import { View, StyleSheet, Text, Button, TextInput } from "react-native";
import WlecomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import color from "./app/config/color";

export default function App() {
  //state
  const [people, setPeople] = useState([
    { name: "sourabh", key: "1" },
    { name: "rahul", key: "2" },
    { name: "velsi", key: "3" },
    { name: "akash", key: "4" },
    { name: "bhavesh", key: "5" },
    { name: "simit", key: "6" },
    { name: "ritika", key: "7" },
    { name: "soumen", key: "8" },
    { name: "nikhil", key: "9" },
    { name: "sreya", key: "10" },
  ]);

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
});
