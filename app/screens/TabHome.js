import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyle } from "../config/Styles";

function TabHome() {
  return (
    <View style={[globalStyle.Background, styles.container]}>
      <Text style={globalStyle.PrimaryTextHeading}>TabHome</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
export default TabHome;
