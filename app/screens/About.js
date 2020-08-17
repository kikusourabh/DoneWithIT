import React from "react";
import { StyleSheet, Text, Button } from "react-native";
import { View } from "react-native";

import { globalStyle } from "../config/Styles";

function About({ route, navigation }) {
  const aboutAnimal = route.params;
  return (
    <View style={globalStyle.Background}>
      <Text style={globalStyle.Text}>About {aboutAnimal}</Text>
      <Button title="Home" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({});
export default About;
