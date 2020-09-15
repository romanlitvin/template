import { ViewStyle } from "react-native";
import { TColor } from "../../../theme";

export interface IBackButtonProps {
  onPress?: () => void;
  style?: ViewStyle;
  iconColor?: TColor;
  cross?: boolean;
  disabled?: boolean;
}
