import { NativeModules } from "react-native";

export interface IReactotronConfig {
  name?: string;
  host?: string;
  useAsyncStorage?: boolean;
  clearOnLoad?: boolean;
  state?: { initial?: boolean };
}

let scriptHostname;
const scriptURL = NativeModules.SourceCode.scriptURL;
scriptHostname = scriptURL.split("://")[1].split(":")[0];

export const DEFAULT_REACTOTRON_CONFIG: IReactotronConfig = {
  clearOnLoad: true,
  host: __DEV__ ? scriptHostname : "localhost",
  useAsyncStorage: true,
  state: { initial: true },
  name: `${require("../../../package.json").name} Application`,
};
