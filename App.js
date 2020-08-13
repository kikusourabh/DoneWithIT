import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Constants from "expo-constants";
import { View, StyleSheet, Text, Button, TextInput } from "react-native";
import WlecomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import color from "./app/config/color";

export default function App() {
  //state
  const [name, setName] = useState("sourabh");
  const [age, setAge] = useState(24);

  return (
    <View style={styles.container}>
      <Text>
        Name {name} and Age {age}
      </Text>
      <TextInput
        style={styles.Input}
        placeholder="Name"
        placeholderTextColor={color.secondary}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.Input}
        placeholder="Age"
        keyboardType="numeric"
        placeholderTextColor={color.secondary}
        onChangeText={(text) => setAge(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: "center",
    justifyContent: "center",
  },
  Input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: color.blackgrey,
    padding: 8,
    margin: 10,
    width: 200,
  },
});
