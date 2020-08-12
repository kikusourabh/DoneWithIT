import { StatusBar } from "expo-status-bar";
import React from "react";
import Constants from "expo-constants";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  // function to call on text onPress event
  const handlePress = () => console.log("text pressed");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello react native - A really really long Text. now I wanna make this
        even longer and see what happend
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8fc0a9",
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
});
