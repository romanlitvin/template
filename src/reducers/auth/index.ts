import { combineReducers } from "redux";

import main from "./main.reducer";
import loadings from "./loadings.reducer";

import { IAuthReducer } from "./auth.props";

export default combineReducers<IAuthReducer>({ main, loadings });

export * from "./auth.props";
