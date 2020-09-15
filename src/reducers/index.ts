import { combineReducers } from "redux";

import authReducer from "./auth";

import { IAppStateReducer } from "./appState.props";

export default combineReducers<IAppStateReducer>({
  authReducer,
});
