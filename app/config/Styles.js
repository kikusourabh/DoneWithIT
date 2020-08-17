import { StyleSheet } from "react-native";
import color from "./color";

export const globalStyle = StyleSheet.create({
  Background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.WindowBackground,
  },
  Text: {
    color: color.black,
  },
});
