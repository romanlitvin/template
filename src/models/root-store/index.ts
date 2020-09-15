import { createStore, applyMiddleware, compose, Store } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import AsyncStorage from "@react-native-community/async-storage";

import Tron from "../../services/reactotron";
import rootReducer from "../../reducers";
import rootSaga from "../../sagas";

const sagaMonitor = Tron.createSagaMonitor && Tron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store: Store;

if (__DEV__) {
  store = createStore(
    persistedReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      //@ts-ignore
      Tron.createEnhancer(),
    ),
  );
} else {
  store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
}

sagaMiddleware.run(rootSaga);

export default {
  store,
  persistor: persistStore(store),
};
