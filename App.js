import { StatusBar } from "expo-status-bar";
import React from "react";
import Constants from "expo-constants";
import { View } from "react-native";
import WlecomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return <ViewImageScreen />;
}
