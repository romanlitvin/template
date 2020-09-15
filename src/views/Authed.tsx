import React from "react";

import { View, Text, Button } from "react-native";

import storeConfig from "../models/root-store";
import { signOut } from "../actions/auth";

const AuthedTemp: React.FC = () => {
  return (
    <View>
      <Text>AuthedTemp</Text>
      <Button
        title={"Sign out"}
        onPress={() => storeConfig.store.dispatch(signOut())}
      />
    </View>
  );
};

export default AuthedTemp;
