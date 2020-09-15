import { IAuthReducer } from "./auth";

export interface IAppStateReducer {
  authReducer: IAuthReducer;
}
