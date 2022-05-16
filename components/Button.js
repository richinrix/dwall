import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, SHADOWS, SIZES } from "../constants";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,

        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        style={{ width: 20, height: 20 }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({ text, bgCol, col }) => {
  return (
    <View>
      <Text
        style={{
          color: col,
          fontSize: SIZES.font,
          backgroundColor: bgCol,
          paddingHorizontal: SIZES.base,
          paddingVertical: 4,
          borderRadius: SIZES.medium,
          fontWeight: "bold",
        }}
      >
        {text}
      </Text>
    </View>
  );
};
