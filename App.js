import { StatusBar } from "expo-status-bar";
import React from "react";
import Constants from "expo-constants";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableNativeFeedback,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";

export default function App() {
  // function to call on text onPress event
  const handlePress = () => console.log("text pressed");

  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="#8fc0a9"
        title="Alert button"
        onPress={() =>
          Alert.alert("my title", "button tap", [
            { text: "yes", onPress: () => console.log("pressed yes") },
            { text: "no", onPress: () => console.log("pressed no") },
          ])
        }
      />
      <Button
        color="#8fc0a9"
        title="promet button"
        onPress={() =>
          Alert.prompt("my title", "button tap", (text) => console.log(text))
        }
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
});
