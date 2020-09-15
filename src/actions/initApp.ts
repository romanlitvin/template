import { AnyAction } from "redux";

import * as types from "./actionTypes";

export const initApp = (): AnyAction => ({ type: types.INIT_APP });
