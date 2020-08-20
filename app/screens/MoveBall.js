import React, { useState } from "react";
import { View, Animated, Text } from "react-native";
import color from "../config/color";
import { TouchableOpacity } from "react-native-gesture-handler";

function MoveBall() {
  const animeValue = useState(new Animated.Value(0))[0];
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
            transform: [{ translateX: animeValue }],
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

export default MoveBall;
