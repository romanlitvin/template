import React from "react";

import HeaderRight from "../../components/Buttons/HeaderRight";
import Icon from "../../components/Icon";

import { TNumberMap, TShouldBeRemoved } from "../../types";

// nav prop same as is passed from bottom tab navigator
export default (index: number, navigation: TShouldBeRemoved): React.ReactNode =>
  (({
    0: (
      <HeaderRight onPress={() => navigation.navigate("CreateEmployee")}>
        <Icon name={"plus"} size={25} />
      </HeaderRight>
    ),
    1: null,
    2: (
      <HeaderRight onPress={() => navigation.navigate("CreateProject")}>
        <Icon name={"plus"} size={25} />
      </HeaderRight>
    ),
    3: (
      <HeaderRight onPress={() => navigation.navigate("CreateRevenue")}>
        <Icon name={"plus"} size={25} />
      </HeaderRight>
    ),
  } as TNumberMap<React.ReactNode>)[index]);
