import { IAppStateReducer } from "../reducers/appState.props";

export const isCustomerLoggedInS = ({ authReducer }: IAppStateReducer) =>
  authReducer.main.isLoggedIn;
