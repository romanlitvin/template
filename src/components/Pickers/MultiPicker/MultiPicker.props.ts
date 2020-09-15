import { Ref } from "react";

import MultiPicker from "./index";

export interface IMultiPickerProps<T> {
  data: Array<{ label: string; value: T }>;
  onValueChange: (values: T[]) => void;
  selectedData: T[];
}

export type TMultiPickerRef<T> = Ref<MultiPicker<T>>;
