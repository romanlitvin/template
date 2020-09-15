import { palette } from "./palette";

export const colors = {
  ...palette,
  transparent: "rgba(0, 0, 0, 0)",
  background: palette.white,
  line: palette.offWhite,
  text: palette.black,
  dim: palette.lightGrey,
  header: palette.offGrey,
};

export type TColor =
  | keyof typeof palette
  | keyof typeof colors
  | keyof typeof palette.rgba
  | undefined;

export const getColor = (color: TColor = "blue", opacity = 1) =>
  // @ts-ignore
  palette.rgba[color] ? palette.rgba[color](opacity) : colors[color] || color;
