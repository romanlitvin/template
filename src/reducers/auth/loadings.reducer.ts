import * as R from "ramda";

import * as types from "../../actions/actionTypes";
import * as I from "./auth.props";
import { createReducer } from "../utils";

export const loadingState: I.IAuthLoadingState = {
  isFetchingSignIn: false,
};

const setAuthLoadingOn = (state: I.IAuthLoadingState) =>
  R.mergeAll([state, { isFetchingSignIn: true }]);

const setAuthLoadingOff = (state: I.IAuthLoadingState) =>
  R.mergeAll([state, { isFetchingSignIn: false }]);

export default createReducer(loadingState, {
  [types.SIGN_IN.REQUEST]: setAuthLoadingOn,
  [types.SIGN_IN.SUCCESS]: setAuthLoadingOff,
  [types.SIGN_IN.FAILURE]: setAuthLoadingOff,
});
