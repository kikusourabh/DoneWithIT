import React, { useState, useRef } from "react";
import { View, Button, Animated, Text } from "react-native";
import color from "./app/config/color";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function App() {
  const animeValue = useState(new Animated.Value(0))[0];
  const move = () => {
    Animated.spring(animeValue, {
      toValue: 300,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Animated.View
          style={{
            height: 100,
            width: 100,
            marginLeft: animeValue,
            borderRadius: 100 / 2,
            backgroundColor: color.WindowBackground,
          }}
        />
        <TouchableOpacity onPress={move}>
          <Text>Move me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
