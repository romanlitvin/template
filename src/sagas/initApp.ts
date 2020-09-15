import { call, takeLatest, delay } from "redux-saga/effects";
import SplashScreen from "react-native-splash-screen";

import * as types from "../actions/actionTypes";

import { createEnvironment } from "../models/environment";

function* initApp() {
  try {
    yield call(createEnvironment);
    yield delay(5000);
    yield call(SplashScreen.hide);
  } catch (err) {
    console.log("err init app", err.message);
  }
}

export default function* () {
  yield takeLatest(types.INIT_APP, initApp);
}
