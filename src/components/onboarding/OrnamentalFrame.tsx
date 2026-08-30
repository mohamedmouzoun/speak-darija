import { View } from "react-native";

import { BottomCenterOrnament } from "./BottomCenterOrnament";
import { CornerOrnament } from "./CornerOrnament";

export function OrnamentalFrame() {
  return (
    <>
      <View className="absolute inset-2 border-2 border-gold" pointerEvents="none" />
      <View className="absolute inset-4" style={{ borderWidth: 1.5, borderColor: "#9C6B2E" }} pointerEvents="none" />

      <CornerOrnament corner="top-left" />
      <CornerOrnament corner="top-right" />
      <CornerOrnament corner="bottom-left" />
      <CornerOrnament corner="bottom-right" />

      <BottomCenterOrnament />
    </>
  );
}
