import React from "react";

import { TouchableNativeFeedback } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { ITouchableProps } from "./Touchable.props";
import { getColor } from "../../../theme";

const Touchable: React.FC<ITouchableProps> = (props) => {
  if (props.legacyImplementation) {
    return <TouchableOpacity {...props}>{props.children}</TouchableOpacity>;
  }
  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple(
        getColor(props.color),
        props.borderLess || false,
      )}
      {...props}>
      {props.children}
    </TouchableNativeFeedback>
  );
};

export default React.memo(Touchable);
