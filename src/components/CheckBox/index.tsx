import React from "react";

import { View } from "react-native";

import Icon from "../Icon";

import styles from "./styles";
import { ICheckBoxProps } from "./CheckBox.props";
import { getColor } from "../../theme";

const CheckBox: React.FC<ICheckBoxProps> = ({ style, isChecked }) => {
  if (!isChecked) {
    return null;
  }
  return (
    <View style={[styles.container, style]}>
      <Icon color={getColor("white")} size={17} name={"check"} />
    </View>
  );
};

export default React.memo(CheckBox);
