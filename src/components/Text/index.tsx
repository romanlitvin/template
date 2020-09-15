import React, { memo } from "react";

import { Text as RNText } from "react-native";

import { ITextProps } from "./text.props";

const Text: React.FC<ITextProps> = (props) => {
  return <RNText {...props}>{props.t}</RNText>;
};

export default memo(Text);
