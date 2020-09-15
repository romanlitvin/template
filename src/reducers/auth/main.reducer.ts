import * as R from "ramda";

import * as types from "../../actions/actionTypes";
import * as I from "./auth.props";
import { createReducer } from "../utils";

export const mainState: I.IAuthMainState = {
  isLoggedIn: false,
};

const setCustomerAuthOn = (state: I.IAuthMainState) =>
  R.mergeAll([state, { isLoggedIn: true }]);

const setCustomerAuthOff = (state: I.IAuthMainState) =>
  R.mergeAll([state, { isLoggedIn: false }]);

export default createReducer(mainState, {
  [types.SIGN_IN.SUCCESS]: setCustomerAuthOn,
  [types.SIGN_OUT.SUCCESS]: setCustomerAuthOff,
});
