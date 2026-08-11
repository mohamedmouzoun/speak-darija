import { useFonts } from "expo-font";

// Keys must match the `--font-*` values registered in src/global.css.
export function useAppFonts() {
  return useFonts({
    "Lora-Regular": require("@/assets/fonts/Lora-Regular.ttf"),
    "Lora-Medium": require("@/assets/fonts/Lora-Medium.ttf"),
    "Lora-SemiBold": require("@/assets/fonts/Lora-SemiBold.ttf"),
    "Lora-Bold": require("@/assets/fonts/Lora-Bold.ttf"),
  });
}
