import React, { useState } from "react";

import { Button, StyleSheet } from "react-native";
import Home from "./app/screens/Home";
import About from "./app/screens/About";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import color from "./app/config/color";

const Stack = createStackNavigator();

export default function App() {
  const hearderOption = {
    headerStyle: {
      backgroundColor: color.headerColor,
    },
    headerTintColor: color.white,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={hearderOption} />
        <Stack.Screen
          name="About"
          component={About}
          options={
            (hearderOption,
            {
              headerRight: () => (
                <Button
                  onPress={() => alert("this is button")}
                  title="back"
                  color={color.black}
                />
              ),
            })
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
