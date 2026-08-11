import { Platform, type ViewStyle } from "react-native";

import { colors } from "./colors";

// Shadows differ between iOS and Android, so they live outside NativeWind
// (see the Style Exception Rules in AGENTS.md) and are applied via `style`.
export const shadows: Record<"card" | "button", ViewStyle> = {
  card: Platform.select({
    ios: {
      shadowColor: colors.forest,
      shadowOpacity: 0.08,
      shadowRadius: 12,
      shadowOffset: { width: 0, height: 4 },
    },
    android: {
      elevation: 3,
    },
    default: {},
  }),
  button: Platform.select({
    ios: {
      shadowColor: colors.terracotta,
      shadowOpacity: 0.2,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 3 },
    },
    android: {
      elevation: 4,
    },
    default: {},
  }),
};
