import { takeLatest, all, call, put } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import * as actions from "../../actions/auth";

import { navigate } from "../../services/navigation";
import { Environment } from "../../models/environment";

import * as I from "../../actions/auth";
import { TApiResponse } from "../../services/api/api.types";
import { TShouldBeRemoved } from "../../types";
import { isResponseSuccess } from "../../utils";

function* signIn(_payload: I.ISignInRequest) {
  try {
    const response: TApiResponse<TShouldBeRemoved> = yield call(
      Environment.apiInstance().signIn,
    );
    if (isResponseSuccess(response.kind)) {
      yield put(actions.signInSuccess(response));
      navigate("BasicRoutes");
    } else {
      throw new Error(response.kind);
    }
  } catch (err) {
    console.log("err signIn", err.message);
  }
}

function* signOut() {
  try {
    const response: TApiResponse<TShouldBeRemoved> = yield call(
      Environment.apiInstance().signOut,
    );
    if (isResponseSuccess(response.kind)) {
      yield put(actions.signOutSuccess());
    } else {
      throw new Error(response.kind);
    }
  } catch (err) {
    console.log("err sign out", err.message);
  }
}

export function* authSaga() {
  yield all([
    yield takeLatest(types.SIGN_IN.REQUEST, signIn),
    yield takeLatest(types.SIGN_OUT.REQUEST, signOut),
  ]);
}
