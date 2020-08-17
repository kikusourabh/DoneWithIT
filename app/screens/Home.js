import React from "react";
import { StyleSheet, Text, Button, Image } from "react-native";
import { View } from "react-native";

import { globalStyle } from "../config/Styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import color from "../config/color";

function Home({ navigation }) {
  return (
    <View style={globalStyle.Background}>
      <View style={styles.animaleContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("About", "cat")}>
          <Image
            style={styles.animalImage}
            source={require("../assets/cat.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("About", "dog")}>
          <Image
            style={styles.animalImage}
            source={require("../assets/dog.png")}
          />
        </TouchableOpacity>
      </View>
      <Text
        style={[
          globalStyle.PrimaryTextHeading,
          { alignSelf: "center", marginTop: 20 },
        ]}
      >
        Click on your faviourate pet animale
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  animalImage: {
    height: 100,
    width: 100,
  },
  animaleContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
export default Home;
