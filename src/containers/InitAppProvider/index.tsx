import React, { useEffect } from "react";

import storeConfig from "../../models/root-store";
import { initApp } from "../../actions/initApp";

import { IInitAppProviderProps } from "./InitAppProvider.props";

const InitAppProvider: React.FC<IInitAppProviderProps> = ({ children }) => {
  useEffect(() => {
    (() => {
      storeConfig.store.dispatch(initApp());
    })();
  }, []);

  return children;
};

export default React.memo(InitAppProvider, () => true);
