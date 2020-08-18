import React from "react";
import Home from "../screens/AnimalHome";
import About from "../screens/AboutAnimal";
import { createStackNavigator } from "@react-navigation/stack";
import color from "../config/color";
import Header from "../components/Header";

const Stack = createStackNavigator();

function HomeStack() {
  const hearderOption = {
    headerStyle: {
      backgroundColor: color.headerColor,
    },
    headerTintColor: color.white,
  };
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => {
          return {
            headerStyle: {
              backgroundColor: color.headerColor,
            },
            headerTintColor: color.white,
            headerTitle: (props) => (
              <Header {...props} Title="Home" navigation={navigation} />
            ),
          };
        }}
      />
      <Stack.Screen name="About" component={About} options={hearderOption} />
    </Stack.Navigator>
  );
}

export default HomeStack;
