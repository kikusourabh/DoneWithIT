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
        <TouchableOpacity>
          <Image
            style={styles.animalImage}
            source={require("../assets/cat.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.animalImage}
            source={require("../assets/dog.png")}
          />
        </TouchableOpacity>
      </View>
      <Button title="About" onPress={() => navigation.navigate("About")} />
    </View>
  );
}

const styles = StyleSheet.create({
  animalImage: {
    height: 100,
    width: 100,
  },
  animaleContainer: {
    backgroundColor: color.white,
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 1,
  },
});
export default Home;
