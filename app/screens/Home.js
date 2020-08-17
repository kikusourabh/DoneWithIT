import React from "react";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";

import { globalStyle } from "../config/Styles";

function Home() {
  return (
    <View style={globalStyle.Background}>
      <Text style={globalStyle.Text}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
export default Home;
