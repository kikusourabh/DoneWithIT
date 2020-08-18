import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import color from "../config/color";
import Header from "../components/Header";
import AboutHome from "../screens/AboutHome";

const Stack = createStackNavigator();

function AboutStack() {
  const hearderOption = {
    headerStyle: {
      backgroundColor: color.headerColor,
    },
    headerTintColor: color.white,
  };
  return (
    <Stack.Navigator initialRouteName="About">
      <Stack.Screen
        name="About"
        component={AboutHome}
        options={({ navigation }) => {
          return {
            headerStyle: {
              backgroundColor: color.headerColor,
            },
            headerTintColor: color.white,
            headerTitle: (props) => (
              <Header {...props} Title="About" navigation={navigation} />
            ),
          };
        }}
      />
      {/* <Stack.Screen name="About" component={About} options={hearderOption} /> */}
    </Stack.Navigator>
  );
}
export default AboutStack;
