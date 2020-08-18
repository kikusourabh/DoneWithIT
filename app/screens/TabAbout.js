import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyle } from "../config/Styles";

function TabAbout() {
  return (
    <View style={[globalStyle.Background, styles.container]}>
      <Text style={globalStyle.PrimaryTextHeading}>TabAbout</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
export default TabAbout;
