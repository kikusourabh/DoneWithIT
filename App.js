import { StatusBar } from "expo-status-bar";
import React from "react";
import Constants from "expo-constants";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  View,
  Dimensions,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={[styles.container]}>
      <View
        style={{
          backgroundColor: "#68b0ab",
          width: "100%",
          height: landscape ? "30%" : "100%",
        }}
      ></View>
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
