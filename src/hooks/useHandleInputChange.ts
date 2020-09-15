import { useCallback } from "react";

import * as I from "../types";
import { TKeyOf, TValueOf } from "../types";

export type TOnValueChange<T> = (
  fieldName: TKeyOf<T>,
) => (value: TValueOf<T>) => void;

export default <T>(
  editable: boolean | undefined,
  onValueChange: TOnValueChange<T> | undefined,
): TOnValueChange<T> =>
  useCallback(
    (name: I.TKeyOf<T>) => {
      if (!editable || !onValueChange) {
        return () => null;
      }
      return onValueChange(name);
    },
    [editable, onValueChange],
  );
