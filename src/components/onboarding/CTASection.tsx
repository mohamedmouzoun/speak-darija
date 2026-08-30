import { View, type PressableProps } from "react-native";

import { PrimaryCTA } from "./PrimaryCTA";
import { SideOrnament } from "./SideOrnament";

export function CTASection({ onPressGetStarted }: { onPressGetStarted?: PressableProps["onPress"] }) {
  return (
    <View className="flex-row items-center justify-center gap-3 w-full">
      <SideOrnament />
      <PrimaryCTA onPress={onPressGetStarted} />
      <SideOrnament />
    </View>
  );
}
