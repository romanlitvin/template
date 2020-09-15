import { createSelector } from "reselect";

import * as s from "../index";

export const getIsCustomerLoggedIn = createSelector(
  s.isCustomerLoggedInS,
  (isLoggedIn) => isLoggedIn,
);
