import { AnyAction } from "redux";

import { TStringMap } from "../../types";

type THandler<T, U> = (state: T, action: U) => T;
type THandlers<T, U> = TStringMap<THandler<T, U>>;

export const createReducer = <T, U extends AnyAction>(
  initialState: T,
  handlers: THandlers<T, U>,
) => (state = initialState, action: U) => {
  if (action.type in handlers) {
    return handlers[action.type](state, action);
  }
  return state;
};
