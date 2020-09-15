import { ReactNode } from "react";
import { ViewStyle } from "react-native";

import { KeyboardOffsets, ScreenPresets } from "./screen.presets";

export interface IScreenProps {
  children?: ReactNode;
  style?: ViewStyle;
  preset?: ScreenPresets;
  backgroundColor?: string;
  statusBar?: "light-content" | "dark-content";
  unsafe?: boolean;
  keyboardOffset?: KeyboardOffsets;
}
