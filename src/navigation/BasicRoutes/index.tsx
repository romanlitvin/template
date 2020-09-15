import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { TBasicRoutesParamsList } from "./BasicRoutes.props";
import { headerTheme } from "../../theme";

import BackButton from "../../components/Buttons/BackButton";
import AuthedTemp from "../../views/Authed";

const BasicRoutesStack = createStackNavigator<TBasicRoutesParamsList>();

export default () => (
  <BasicRoutesStack.Navigator
    screenOptions={{
      headerTitleStyle: headerTheme.default.title,
      headerStyle: headerTheme.default.container,
      headerLeft: () => <BackButton />,
    }}>
    <BasicRoutesStack.Screen
      options={{ headerShown: false }}
      name={"AuthedTemp"}
      component={AuthedTemp}
    />
  </BasicRoutesStack.Navigator>
);
