import React from "react";
import { StyleSheet, Text, Button } from "react-native";
import { View } from "react-native";

import { globalStyle } from "../config/Styles";

function Home({ navigation }) {
  return (
    <View style={globalStyle.Background}>
      <Text style={globalStyle.Text}>Home</Text>
      <Button title="About" onPress={() => navigation.navigate("About")} />
    </View>
  );
}

const styles = StyleSheet.create({});
export default Home;
