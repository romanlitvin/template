import React from "react";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";

import storeConfig from "./models/root-store";
import { navigationRef } from "./services/navigation";

import RootStack from "./navigation/RootStack";
import InitAppProvider from "./containers/InitAppProvider";

enableScreens();

const App = () => (
  <InitAppProvider>
    <Provider store={storeConfig.store}>
      <PersistGate persistor={storeConfig.persistor}>
        <NavigationContainer ref={navigationRef}>
          <RootStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  </InitAppProvider>
);

export default App;
