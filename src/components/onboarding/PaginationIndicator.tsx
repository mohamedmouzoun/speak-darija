import { View } from "react-native";

import { PaginationDot } from "./PaginationDot";
import { PaginationFlourish } from "./PaginationFlourish";

// Darkest dot marks the current page; each dot after it fades a step lighter.
const DOT_COLORS = ["#5C3D1E", "#8B5E34", "#B8874B", "#D4AD73", "#E8CFA0"];

export function PaginationIndicator() {
  return (
    <View className="flex-row items-center gap-2">
      <PaginationFlourish />
      {DOT_COLORS.map((color) => (
        <PaginationDot key={color} color={color} />
      ))}
      <PaginationFlourish />
    </View>
  );
}
