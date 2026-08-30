// Font family names below must match the keys used when loading fonts
// with `useFonts` (see src/hooks/use-app-fonts.ts).
export const fontFamily = {
  // Lora — the app's single serif family, used for both headings/brand
  // expressions and body copy/interface text.
  displaySemiBold: "Lora-SemiBold",
  displayBold: "Lora-Bold",

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
  h1: { fontSize: 44, lineHeight: 44 * 1.1, fontFamily: fontFamily.displayBold },
  h2: { fontSize: 32, lineHeight: 32 * 1.2, fontFamily: fontFamily.displayBold },
  h3: { fontSize: 24, lineHeight: 24 * 1.3, fontFamily: fontFamily.displaySemiBold },
  h4: { fontSize: 18, lineHeight: 18 * 1.4, fontFamily: fontFamily.displaySemiBold },
  bodyLarge: { fontSize: 16, lineHeight: 16 * 1.6, fontFamily: fontFamily.sansMedium },
  body: { fontSize: 14, lineHeight: 14 * 1.6, fontFamily: fontFamily.sans },
  bodySmall: { fontSize: 13, lineHeight: 13 * 1.6, fontFamily: fontFamily.sans },
  caption: { fontSize: 11, lineHeight: 11 * 1.5, fontFamily: fontFamily.sans },
};
