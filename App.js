import { StatusBar } from "expo-status-bar";
import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, Button, Platform } from "react-native";

export default function App() {
  // function to call on text onPress event
  const handlePress = () => console.log("text pressed");

  return (
    <SafeAreaView style={[styles.container]}>
      <Button
        color="#8fc0a9"
        title="Click me"
        onPress={() => console.log("pressed")}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
});
