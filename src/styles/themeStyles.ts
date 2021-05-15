export type ThemedColor = keyof typeof THEME_COLORS;

export const THEME_COLORS = {
  PRIMARY: '#00bfff',
  SECONDARY: '#00b5ee',
  TERTIARY: '#0040ff',
  GREY1: '#292929',
  GREY2: '#161616'
};

export const getThemeColor = (color: ThemedColor): string =>
  THEME_COLORS[color];

export type ThemedFontSize = keyof typeof THEME_FONT_SIZES;

export const THEME_FONT_SIZES = {
  TEXT_SMALL: 0.8,
  TEXT_DEFAULT: 1,
  TEXT_BIG: 1.3,
  HEADER_SMALL: 1.4,
  HEADER_DEFAULT: 1.7,
  HEADER_BIG: 2
};

export const getThemeFontSize = (size: ThemedFontSize): number =>
  THEME_FONT_SIZES[size];
