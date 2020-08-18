import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./HomeStack";
import About from "./AboutStack";

const Drawer = createDrawerNavigator();
function DrawerHome() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="stackhome">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerHome;
