import { createRef } from "react";
import { TShouldBeRemoved } from "../../types";

export const navigationRef = createRef<TShouldBeRemoved>();

export const navigate = (name: string, params?: object): void =>
  navigationRef.current?.navigate(name, params);

export const goBack = (options?: object): boolean =>
  navigationRef.current?.goBack(options);
