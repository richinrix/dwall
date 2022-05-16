import { View, Text, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { CircleButton, RectButton } from "./Button";

import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";
const NFTCard = ({ data }) => {
  const navigation = useNavigation();
  if (data)
    return (
      <View
        style={{
          backgroundColor: COLORS.white,
          borderRadius: SIZES.medium,
          marginBottom: SIZES.extraLarge,
          margin: SIZES.base,
          // padding: SIZES.base,
          ...SHADOWS.dark,
          backgroundColor: COLORS.primary,
        }}
      >
        <View
          style={{
            width: "100%",
            height: 250,
          }}
        >
          <Image
            source={data.image}
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",

              borderTopLeftRadius: SIZES.medium,
              borderTopRightRadius: SIZES.medium,
            }}
          />

          <CircleButton imgUrl={assets.heart} right={10} top={10} />
        </View>
        <SubInfo data={data} />
        <View
          style={{
            width: "100%",
            paddingVertical: SIZES.base,
            paddingHorizontal: SIZES.font,
          }}
        >
          <NFTTitle title={data.name} subTitle={data.creator} />
          <View
            style={{
              marginTop: SIZES.base,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <EthPrice price={data.price} />
            <RectButton
              text={"BUY"}
              bgCol={COLORS.white}
              col={COLORS.primary}
              onPress={() => navigation.navigate("NFTDetail")}
            />
          </View>
        </View>
      </View>
    );
  else return null;
};

export default NFTCard;
