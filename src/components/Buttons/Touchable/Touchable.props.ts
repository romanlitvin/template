import { TouchableOpacityProps } from "react-native";
import { ReactNode } from "react";
import { TColor } from "../../../theme";

export interface ITouchableProps extends TouchableOpacityProps {
  children: ReactNode;
  borderLess?: boolean;
  color?: TColor;
  legacyImplementation?: boolean;
}
