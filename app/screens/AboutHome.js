import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyle } from "../config/Styles";

function AboutHome() {
  return (
    <View style={[globalStyle.Background, styles.container]}>
      <Text style={globalStyle.PrimaryTextHeading}>AboutHome</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
export default AboutHome;
