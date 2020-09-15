import { TouchableOpacityProps } from "react-native";
import React from "react";

export interface IHeaderRightProps extends TouchableOpacityProps {
  onPress: () => void;
  children: React.ReactNode;
}
