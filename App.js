import { StatusBar } from "expo-status-bar";
import React from "react";
import Constants from "expo-constants";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableNativeFeedback,
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from "react-native";

export default function App() {
  // function to call on text onPress event
  const handlePress = () => console.log("text pressed");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello react native
      </Text>
      {/* touchables */}
      <TouchableHighlight onPress={() => console.log("Image tapped")}>
        {/* for loading images from url */}
        <Image
          blurRadius={10}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
      <TouchableOpacity>
        {/* for loading local images from the assets folder */}
        <Image source={require("./assets/favicon.png")} />
      </TouchableOpacity>

      <TouchableNativeFeedback onPress={() => console.log("Image tapped")}>
        {/* for loading images from url */}
        <View
          style={{ width: 200, height: 70, backgroundColor: "#8fc0a9" }}
        ></View>
      </TouchableNativeFeedback>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
});
