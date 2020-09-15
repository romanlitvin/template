import React from "react";

import { StatusBar as RCStatusBar, StatusBarProps } from "react-native";

import { isAndroid } from "../constants";
import { getColor } from "../theme";

const StatusBar: React.FC<StatusBarProps> = (props) => (
  <RCStatusBar
    animated
    backgroundColor={getColor("header")}
    barStyle={isAndroid ? "light-content" : "dark-content"}
    {...props}
  />
);

export default React.memo(StatusBar);
