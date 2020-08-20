import React, { useState } from "react";
import { View, Animated, Text } from "react-native";
import color from "../config/color";
import { TouchableOpacity } from "react-native-gesture-handler";

function FadeInBall() {
  const opacity = useState(new Animated.Value(0))[0];
  const fadeIn = () => {
    Animated.spring(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.spring(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const move = () => {
    Animated.spring(animeValue, {
      toValue: 150,
      duration: 4000,
      useNativeDriver: true,
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
            opacity,
            borderRadius: 100 / 2,
            backgroundColor: color.WindowBackground,
          }}
        />
        <TouchableOpacity onPress={fadeIn}>
          <Text>fadeIn</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={fadeOut}>
          <Text>fadeOut</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default FadeInBall;
