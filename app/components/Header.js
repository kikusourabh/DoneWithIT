import React from "react";
import { Text, StyleSheet, View, Platform } from "react-native";
import color from "../config/color";
import { Icon } from "react-native-elements";

function Header({ Title, navigation }) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.HeaderContainer}>
      <Icon
        name="menu"
        style={styles.Icon}
        color={color.white}
        onPress={openMenu}
      />
      <View style={styles.HeaderContainer}>
        <Text style={styles.TitleText}>{Title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderContainer: {
    width: "95%",
    height: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  Icon: {
    position: "relative",
  },
  TitleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: color.white,
  },
});
export default Header;
