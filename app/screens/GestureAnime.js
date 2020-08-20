import React, { useState, useRef } from "react";
import { View, Animated, Text, PanResponder, StyleSheet } from "react-native";
import color from "../config/color";
import { TouchableOpacity } from "react-native-gesture-handler";

function GestureAnime() {
  const panValue = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        panValue.setOffset({
          x: panValue.x._value,
          y: panValue.y._value,
        });
      },
      onPanResponderMove: Animated.event([
        null,
        { dx: panValue.x, dy: panValue.y },
      ]),
      onPanResponderRelease: () => {
        Animated.spring(panValue, { toValue: { x: 0, y: 0 } }).start();
      },
    })
  ).current;

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Animated.View
          style={{
            transform: [{ translateX: panValue.x }, { translateY: panValue.y }],
          }}
          {...panResponder.panHandlers}
        >
          <View style={styles.box} />
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 150,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 150 / 2,
  },
});

export default GestureAnime;
