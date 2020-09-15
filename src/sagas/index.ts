import { spawn } from "redux-saga/effects";

import initApp from "./initApp";
import { authSaga } from "./auth";

export default function* () {
  yield spawn(initApp);
  yield spawn(authSaga);
}
