import React from "react";

import FontelloIcon, { IIconProps } from "../../../assets/icons/icon";
import { getColor } from "../../theme";

const Icon: React.FC<IIconProps> = (props) => (
  <FontelloIcon {...props} color={getColor(props.color)} />
);

export default React.memo(Icon);
