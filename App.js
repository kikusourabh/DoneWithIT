import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Constants from "expo-constants";
import { StyleSheet, Platform, SafeAreaView } from "react-native";

import color from "./app/config/color";

export default function App() {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    paddingTop: Platform.OS == "android" ? Constants.statusBarHeight : 0,
  },
});
