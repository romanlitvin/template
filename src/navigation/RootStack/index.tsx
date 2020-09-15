import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import container from "./RootStack.container";
import BasicRoutes from "../BasicRoutes";

import * as I from "./RootStack.props";
import { headerTheme } from "../../theme";
import SignIn from "../../views/SignIn";

const RootStack = createStackNavigator<I.TRootStackParamsList>();

const RootStackNavigator: React.FC<I.IRootStackProps> = ({ isLoggedIn }) => (
  <RootStack.Navigator
    screenOptions={{
      headerTitleStyle: headerTheme.default.title,
      headerStyle: headerTheme.default.container,
    }}>
    {isLoggedIn ? (
      <RootStack.Screen
        options={{ headerShown: false, gestureEnabled: false }}
        name={"BasicRoutes"}
        component={BasicRoutes}
      />
    ) : (
      <RootStack.Screen
        options={{
          headerShown: false,
          gestureEnabled: false,
          animationTypeForReplace: isLoggedIn ? "push" : "pop",
        }}
        name={"SignIn"}
        component={SignIn}
      />
    )}
  </RootStack.Navigator>
);

export default container(RootStackNavigator);
