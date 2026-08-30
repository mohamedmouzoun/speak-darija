import { ImageBackground, Pressable, View, type PressableProps } from "react-native";

import { images } from "@/constants/images";

import { ButtonCornerAccent } from "./ButtonCornerAccent";
import { ButtonLabel } from "./ButtonLabel";
import { ChevronIcon } from "./ChevronIcon";

export function PrimaryCTA({ onPress }: { onPress?: PressableProps["onPress"] }) {
  return (
    <View className="flex-1">
      <Pressable
        onPress={onPress}
        className="overflow-hidden p-1"
        style={{ borderWidth: 3, borderColor: "#9C6B2E" }}
      >
        <ImageBackground
          source={images.buttonTexture}
          resizeMode="stretch"
          className="overflow-hidden"
          style={{ borderWidth: 1, borderColor: "#9C6B2E80" }}
        >
          <View className="absolute inset-0 bg-gold/10" />
          <View className="flex-row items-center justify-center gap-2 py-3">
            <ButtonLabel>Get Started</ButtonLabel>
            <ChevronIcon />
          </View>
        </ImageBackground>
      </Pressable>

      <ButtonCornerAccent corner="top-left" />
      <ButtonCornerAccent corner="top-right" />
      <ButtonCornerAccent corner="bottom-left" />
      <ButtonCornerAccent corner="bottom-right" />
    </View>
  );
}
