import { View, Text, Image } from "react-native";
import React from "react";
import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../constants";

export const NFTTitle = ({ title, subTitle }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.bold,
          fontSize: SIZES.large,
          color: COLORS.white,
        }}
      >
        {" "}
        {title}{" "}
      </Text>
      <Text
        style={{
          color: COLORS.white,
        }}
      >
        {" "}
        - {subTitle}{" "}
      </Text>
    </View>
  );
};

export const EthPrice = ({ price }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.bold,
          fontSize: SIZES.medium,
          color: COLORS.white,
        }}
      >
        {price} ETH
      </Text>
    </View>
  );
};

export const ImageCmp = ({ imgUrl, index }) => {
  // return null;
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 32,
        height: 32,
        marginLeft: index == 0 ? 0 : -SIZES.large,
      }}
    />
  );
};

export const People = () => {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      {[assets.person02, assets.person03, assets.person01].map(
        (imgUrl, index) => {
          return (
            <ImageCmp index={index} imgUrl={imgUrl} key={`People-${index}`} />
          );
        }
      )}
    </View>
  );
};

export const EndDate = () => {
  return (
    <View
      style={{
        padding: 3,
        borderRadius: 5,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: 10,
          color: COLORS.primary,
        }}
      >
        Ending in
      </Text>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: 14,
          color: COLORS.primary,
        }}
      >
        12h 30m
      </Text>
    </View>
  );
};

export const SubInfo = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <People />
      <EndDate />
    </View>
  );
};
