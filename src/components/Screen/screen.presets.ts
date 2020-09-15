import { ViewStyle } from "react-native";
import { isNil } from "ramda";

import { colors } from "../../theme";

export const offsets = {
  none: 0,
  big: 70,
};

export type KeyboardOffsets = keyof typeof offsets;

export const presets = {
  fixed: {
    outer: {
      backgroundColor: colors.background,
      flex: 1,
      height: "100%",
    } as ViewStyle,
    inner: {
      justifyContent: "flex-start",
      alignItems: "stretch",
      height: "100%",
      width: "100%",
    } as ViewStyle,
  },

  scroll: {
    outer: {
      backgroundColor: colors.background,
      flex: 1,
      height: "100%",
    } as ViewStyle,
    inner: {
      justifyContent: "flex-start",
      alignItems: "stretch",
      paddingBottom: 30,
    } as ViewStyle,
  },
};

export type ScreenPresets = keyof typeof presets;

export const isNonScrolling = (preset?: ScreenPresets): boolean =>
  isNil(preset) ||
  !preset.length ||
  isNil(presets[preset]) ||
  preset === "fixed";
