import React from "react";
import { Text, StyleSheet, View, Platform } from "react-native";
import color from "../config/color";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

function Header() {
  return (
    <View style={styles.HeaderContainer}>
      <Text style={styles.TitleText}>Todo App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderContainer: {
    height: Platform.OS == "android" ? 56 : 80,
    backgroundColor: color.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  TitleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: color.white,
  },
});
export default Header;
