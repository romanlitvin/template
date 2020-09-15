import Tron, {
  trackGlobalErrors,
  openInEditor,
  overlay,
} from "reactotron-react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { reactotronRedux } from "reactotron-redux";
import sagaPlugin from "reactotron-redux-saga";

import { DEFAULT_REACTOTRON_CONFIG } from "./reactotronConfig";

const reactotron = Tron;

declare global {
  // eslint-disable-next-line @typescript-eslint/interface-name-prefix
  interface Console {
    tron: any;
  }
}

const noop = () => undefined;

if (__DEV__) {
  // @ts-ignore
  console.log = Tron.log;
} else {
  console.tron = {
    benchmark: noop,
    clear: noop,
    close: noop,
    configure: noop,
    connect: noop,
    display: noop,
    error: noop,
    image: noop,
    log: noop,
    logImportant: noop,
    onCustomCommand: noop,
    overlay: noop,
    reportError: noop,
    send: noop,
    startTimer: noop,
    storybookSwitcher: noop,
    use: noop,
    useReactNative: noop,
    warn: noop,
  };
}

if (__DEV__) {
  Tron.configure(DEFAULT_REACTOTRON_CONFIG)
    .useReactNative({ asyncStorage: true })
    .use(reactotronRedux())
    .use(sagaPlugin({}))
    .use(overlay())
    .use(
      trackGlobalErrors({
        veto: (frame) =>
          frame.fileName?.indexOf("/node_modules/react-native/") >= 0,
      }),
    )
    .use(openInEditor());
  Tron.setAsyncStorageHandler && Tron.setAsyncStorageHandler(AsyncStorage);
  Tron.clear && Tron.clear();
}

export default reactotron;
