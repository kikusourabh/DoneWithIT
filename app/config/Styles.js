import { StyleSheet } from "react-native";
import color from "./color";

export const globalStyle = StyleSheet.create({
  Background: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: color.WindowBackground,
  },
  PrimaryTextHeading: {
    color: color.primary_text,
    fontSize: 20,
  },
});
