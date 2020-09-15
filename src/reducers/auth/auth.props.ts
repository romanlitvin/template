import { AnyAction } from "redux";

export interface IAuthMainState {
  isLoggedIn: boolean;
}

export interface IAuthLoadingState {
  isFetchingSignIn: boolean;
}

export interface IAuthReducer {
  main: IAuthMainState;
  loadings: IAuthLoadingState;
}

export type TIncomeAction = AnyAction;
