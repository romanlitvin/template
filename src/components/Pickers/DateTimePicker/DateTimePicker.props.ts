import { AndroidEvent } from "@react-native-community/datetimepicker";

export interface IDateTimePickerProps {
  value: Date;
  onPickerChange: (timestamp: AndroidEvent, value?: Date) => void;
  mode: "time" | "date";
}
