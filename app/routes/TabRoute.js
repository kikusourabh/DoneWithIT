import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/TabHome";
import About from "../screens/TabAbout";
import { Icon } from "react-native-elements";
import color from "../config/color";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconname;
          if (route.name === "Home") {
            iconname = "home";
          } else {
            iconname = "settings";
          }
          return <Icon name={iconname} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activieTintColor: color.active,
        inactivieTintColor: color.inactive,
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{ tabBarBadge: 3 }} />
      <Tab.Screen name="Settings" component={About} />
    </Tab.Navigator>
  );
}
