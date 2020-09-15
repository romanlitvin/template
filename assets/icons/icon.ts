import { createIconSetFromFontello } from "react-native-vector-icons";

import config from "./config.json";
import { TColor } from "../../src/theme";
import { IconProps } from "react-native-vector-icons/Icon";

export type TIconNames =
  | "tag"
  | "arrowdown"
  | "pen"
  | "camera"
  | "paper-plane"
  | "globe"
  | "arrow-circle-right"
  | "application"
  | "id-card"
  | "tachometer"
  | "search"
  | "qrcode"
  | "tools"
  | "users"
  | "question-circle"
  | "location"
  | "check"
  | "truck"
  | "map-marker"
  | "plus-circle"
  | "list"
  | "tire-rugged"
  | "info"
  | "chevron-left"
  | "plus"
  | "truck-front"
  | "phone"
  | "city"
  | "cancel-circle"
  | "comments"
  | "chevron-down"
  | "credit-card-solid"
  | "warehouse"
  | "minus-circle"
  | "check-circle"
  | "tire"
  | "chart"
  | "container"
  | "user-circle"
  | "type"
  | "bluetooth"
  | "arrow-down"
  | "exclamation-triangle"
  | "tire-flat"
  | "chevron-right"
  | "file-pdf"
  | "credit-card"
  | "building"
  | "sort-down"
  | "th-large"
  | "claw-marks"
  | "home"
  | "password"
  | "file"
  | "list-alt"
  | "user"
  | "save"
  | "calendar-star"
  | "tire-pressure-warning"
  | "chevron-up";

export interface IIconProps extends IconProps {
  name: TIconNames;
  size: number;
  color?: TColor;
}

export default createIconSetFromFontello(config);
