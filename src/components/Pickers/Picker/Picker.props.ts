import { ReactText, Ref } from "react";

import Picker from "./index";

export type TPickerRef<T extends string | number> = Ref<Picker<T>>;

export interface IPickerProps<T> {
  data: Array<{ label: string; value: T }>;
  onValueChange: (value: ReactText, index: number) => void;
  value: T;
}
