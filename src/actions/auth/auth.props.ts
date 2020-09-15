import { Action } from "redux";

import * as types from "../actionTypes";
import { TSignInCredentials, TShouldBeRemoved } from "../../types";

export interface ISignInRequest extends Action<typeof types.SIGN_IN.REQUEST> {
  payload: TSignInCredentials;
}

export type TSignInRequestAction = (
  payload: TSignInCredentials,
) => ISignInRequest;

export type ISignInSuccessResponse = TShouldBeRemoved;

export interface ISignInSuccess extends Action<typeof types.SIGN_IN.SUCCESS> {
  payload: ISignInSuccessResponse;
}

export type TSignOutRequest = { type: typeof types.SIGN_OUT.REQUEST };

export type TSIgnOutSuccess = { type: typeof types.SIGN_OUT.SUCCESS };
