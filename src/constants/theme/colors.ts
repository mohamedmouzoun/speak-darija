export const colors = {
  forest: "#0F3B2E",
  terracotta: "#E25A2C",
  gold: "#F2884B",
  sage: "#7FA77A",

  success: "#16A34A",
  warning: "#F59E0B",
  accent: "#E25A2C",
  info: "#2563EB",

  text: "#0B241A",
  textSecondary: "#33423D",
  surface: "#F7F1E6",
  border: "#F1E4D5",
  background: "#FFF9F1",
} as const;

export type ColorToken = keyof typeof colors;
