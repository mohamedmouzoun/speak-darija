export const colors = {
  forest: "#0F3B2E",
  terracotta: "#E25A2C",
  gold: "#F2B848",
  sage: "#7FA77A",

  success: "#16A34A",
  warning: "#F59E0B",
  accent: "#E25A2C",
  info: "#2563EB",

  text: "#0B241A",
  textSecondary: "#33403A",
  surface: "#FAF6EF",
  border: "#E8DCC3",
  background: "#EFD8AC",

  disabled: "#ECD7BA",
  disabledText: "#B7A480",
} as const;

export type ColorToken = keyof typeof colors;
