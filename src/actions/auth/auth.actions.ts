import * as types from "../actionTypes";
import * as I from "./auth.props";
import { ISignInSuccessResponse } from "./auth.props";

export const signIn: I.TSignInRequestAction = (payload) => ({
  type: types.SIGN_IN.REQUEST,
  payload,
});

export const signInSuccess = (
  payload: ISignInSuccessResponse,
): I.ISignInSuccess => ({
  type: types.SIGN_IN.SUCCESS,
  payload,
});

export const signOut = (): I.TSignOutRequest => ({
  type: types.SIGN_OUT.REQUEST,
});

export const signOutSuccess = (): I.TSIgnOutSuccess => ({
  type: types.SIGN_OUT.SUCCESS,
});
