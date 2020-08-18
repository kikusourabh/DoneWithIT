import React from "react";
import { StyleSheet, Text, Button, Image } from "react-native";
import { View } from "react-native";

import { globalStyle } from "../config/Styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import color from "../config/color";

function AnimalHome({ navigation }) {
  return (
    <View style={globalStyle.Background}>
      <View style={styles.animaleContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("About", {
              aboutAnimal: "cat",
              animalImage: require("../assets/cat2.jpg"),
              description:
                "The cat (Felis catus) is a domestic species of small carnivorous mammal. " +
                "It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family. " +
                "A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact. " +
                "Domestic cats are valued by humans for companionship and their ability to hunt rodents. About 60 cat breeds are recognized by various cat registries.",
            });
          }}
        >
          <Image
            style={styles.animalImage}
            source={require("../assets/cat.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("About", {
              aboutAnimal: "dog",
              animalImage: require("../assets/dog2.jpg"),
              description:
                "The dog (Canis familiaris when considered a distinct species or Canis lupus familiaris when considered a subspecies of the wolf) is a domesticated carnivore of the family Canidae." +
                " It is part of the wolf-like canids, and is the most widely abundant terrestrial carnivore." +
                "The dog and the extant gray wolf are sister taxa as modern wolves are not closely related to the wolves that were first domesticated, which implies that the direct ancestor of the dog is extinct." +
                "The dog was the first species to be domesticated, and has been selectively bred over millennia for various behaviors, sensory capabilities, and physical attributes.",
            });
          }}
        >
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
export default AnimalHome;
