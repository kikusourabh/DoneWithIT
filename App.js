import { StatusBar } from "expo-status-bar";
import React from "react";
import Constants from "expo-constants";
import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#ffffff",
        flex: 1,
        flexDirection: "row", //horizontal
        justifyContent: "center", //primary
        alignItems: "center", //secondary
      }}
    >
      <View
        style={{
          backgroundColor: "#ffa36c",
          width: 100,
          height: 300,
          alignSelf: "flex-start",
        }}
      />
      <View
        style={{
          backgroundColor: "#ebdc87",
          width: 100,
          height: 200,
        }}
      />
      <View
        style={{
          backgroundColor: "#799351",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}
