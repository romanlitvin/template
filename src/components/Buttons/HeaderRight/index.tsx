import React from "react";

import { IHeaderRightProps } from "./HeaderRight.props";

import { hitSlops } from "../../../constants";

import Touchable from "../Touchable";

const HeaderRight: React.FC<IHeaderRightProps> = ({
  onPress,
  children,
  ...props
}) => (
  <Touchable
    hitSlop={hitSlops.small}
    style={{ marginRight: 18, padding: 6 }}
    onPress={onPress}
    {...props}>
    {children}
  </Touchable>
);

export default React.memo(HeaderRight);
