// Font family names below must match the keys used when loading fonts
// with `useFonts` (see src/hooks/use-app-fonts.ts).
export const fontFamily = {
  display: "Lora-Bold",
  sans: "Lora-Regular",
  sansMedium: "Lora-Medium",
  sansSemiBold: "Lora-SemiBold",
  sansBold: "Lora-Bold",
} as const;

type TextStyleToken = {
  fontSize: number;
  lineHeight: number;
  fontFamily: string;
};

export const typeScale: Record<string, TextStyleToken> = {
  h1: { fontSize: 44, lineHeight: 44 * 1.1, fontFamily: fontFamily.display },
  h2: { fontSize: 32, lineHeight: 32 * 1.2, fontFamily: fontFamily.display },
  h3: { fontSize: 24, lineHeight: 24 * 1.3, fontFamily: fontFamily.sansSemiBold },
  h4: { fontSize: 18, lineHeight: 18 * 1.4, fontFamily: fontFamily.sansSemiBold },
  bodyLarge: { fontSize: 16, lineHeight: 16 * 1.6, fontFamily: fontFamily.sansMedium },
  body: { fontSize: 14, lineHeight: 14 * 1.6, fontFamily: fontFamily.sans },
  bodySmall: { fontSize: 13, lineHeight: 13 * 1.6, fontFamily: fontFamily.sans },
  caption: { fontSize: 11, lineHeight: 11 * 1.5, fontFamily: fontFamily.sans },
};
