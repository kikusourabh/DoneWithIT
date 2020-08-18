import React, { useState } from "react";
import { StyleSheet, Text, Button, Image, View } from "react-native";

import { globalStyle } from "../config/Styles";

function About({ route, navigation }) {
  const [{ aboutAnimal }, setanimle] = useState(route.params);
  const [{ animalImage }, setImage] = useState(route.params);
  const [{ description }, setDescription] = useState(route.params);
  return (
    <View style={[globalStyle.Background, styles.Container]}>
      <Image
        resizeMode="contain"
        style={styles.ImageStyle}
        source={animalImage}
      />
      <Text style={[globalStyle.Text, styles.HeadingStyle]}>
        About {aboutAnimal}
      </Text>
      <Text style={[globalStyle.Text, styles.descriptionStyle]}>
        {description}
      </Text>
      {/* 
      manully go back code
      <Button title="Home" onPress={() => navigation.goBack()} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    alignItems: "center",
  },
  descriptionStyle: {
    padding: 20,
    textAlign: "justify",
  },
  HeadingStyle: {
    fontSize: 22,
    marginTop: 20,
  },
  ImageStyle: {
    height: 250,
    width: 250,
  },
});
export default About;
