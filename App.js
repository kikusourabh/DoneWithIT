import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Constants from "expo-constants";
import { View, StyleSheet, Text, Button } from "react-native";
import WlecomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  //state
  const [name, setName] = useState("sourabh");
  const [person, setPerson] = useState({ name: "sourabh", age: 24 });

  const pressHandler = () => {
    //checking the sate and proceed on base of the condition
    if (name === "sourabh") {
      //updating state value
      setName("sourabh karmakar");
      setPerson({ name: "sourabh karmakar", age: 24 });
    } else {
      //updating state value
      setName("sourabh");
      setPerson({ name: "sourabh", age: 24 });
    }
  };
  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>
        Name {person.name} and Age {person.age}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="update name" onPress={pressHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 20,
  },
});
