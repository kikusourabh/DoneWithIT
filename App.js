import React, { useState, useRef } from "react";
import { View, Button, Animated } from "react-native";
import color from "./app/config/color";

export default function App() {
  const fadeAnim = new Animated.ValueXY({ x: 0, y: 0 });
  const move = () => {
    Animated.timing(fadeAnim, {
      toValue: { x: 100, y: 100 },
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
      <Animated.View style={fadeAnim.getLayout()}>
        <View
          style={{
            height: 100,
            width: 100,
            borderRadius: 100 / 2,
            backgroundColor: color.WindowBackground,
          }}
        />
      </Animated.View>
      <Button title="Move" onPress={move} />
    </View>
  );
}
