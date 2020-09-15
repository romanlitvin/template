import React from "react";

import { View } from "react-native";

import Touchable from "../Touchable";
import Icon from "../../Icon";

import { goBack } from "../../../services/navigation";
import { IBackButtonProps } from "./BackButton.props";
import { headerTheme } from "../../../theme";
import { hitSlops } from "../../../constants";

const BackButton: React.FC<IBackButtonProps> = ({
  onPress,
  style,
  iconColor,
  cross,
  disabled,
}) => (
  <Touchable
    hitSlop={hitSlops.small}
    disabled={disabled}
    style={{ marginLeft: 18 }}
    onPress={onPress || goBack}>
    <View style={[headerTheme.default.icon, style]}>
      {!cross && <Icon name={"chevron-left"} size={20} color={iconColor} />}
    </View>
  </Touchable>
);

export default React.memo(BackButton);
