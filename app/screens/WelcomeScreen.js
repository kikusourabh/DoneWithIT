import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

function WlecomeScreen(props) {
  return (
    <ImageBackground
      style={styles.bacground}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.AppName}>Wallpaper App</Text>
      </View>

      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  AppName: {
    color: "#ffffff",
    fontSize: 30,
    top: 20,
  },
  bacground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#68b0ab",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#8fc0a9",
  },
});
export default WlecomeScreen;
