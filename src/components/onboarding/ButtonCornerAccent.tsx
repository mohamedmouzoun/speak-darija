import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const SIZE = 18;
const COLOR = "#9C6B2E";

// A small bead-and-tick flourish that sits in a button's top-left corner.
// Rotate by 90/180/270 to place it in the other three corners.
function CornerGlyph() {
  return (
    <Svg width={SIZE} height={SIZE} viewBox="0 0 18 18">
      <Path d="M8 5 H16" stroke={COLOR} strokeWidth={1.4} strokeLinecap="round" />
      <Path d="M5 8 V16" stroke={COLOR} strokeWidth={1.4} strokeLinecap="round" />
      <Path d="M5 2 L8 5 L5 8 L2 5 Z" fill={COLOR} />
    </Svg>
  );
}

const CORNER_STYLES = {
  "top-left": { top: -3, left: -3, transform: [{ rotate: "0deg" }] },
  "top-right": { top: -3, right: -3, transform: [{ rotate: "90deg" }] },
  "bottom-right": { bottom: -3, right: -3, transform: [{ rotate: "180deg" }] },
  "bottom-left": { bottom: -3, left: -3, transform: [{ rotate: "270deg" }] },
} as const;

export function ButtonCornerAccent({ corner }: { corner: keyof typeof CORNER_STYLES }) {
  return (
    <View className="absolute" style={CORNER_STYLES[corner]} pointerEvents="none">
      <CornerGlyph />
    </View>
  );
}
