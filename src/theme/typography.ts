import { getColor, TColor } from "./index";
import { isIOS } from "../constants";
import { Platform } from "react-native";

type TFontFamily = {
  regular: string;
  bold: string;
  light: string;
};

const fontFamily = Platform.select<TFontFamily>({
  ios: {
    regular: "Calibri",
    bold: "Calibri-Bold",
    light: "Calibri-Light",
  },
  android: {
    regular: "Calibri Regular",
    bold: "Calibri Bold",
    light: "Calibri Light",
  },
});

const topA = isIOS ? 3 : 0;
const topB = isIOS ? 2.5 : 0;
const topC = isIOS ? 4 : 0;

export const typography = {
  b1: (color?: TColor, opacity?: number) => ({
    fontFamily: fontFamily?.bold,
    fontSize: 16,
    top: topA,
    color: getColor(color, opacity),
  }),
  b2: (color?: TColor, opacity?: number) => ({
    fontFamily: fontFamily?.bold,
    fontSize: 12,
    top: topA,
    color: getColor(color, opacity),
  }),
  h1: (color?: TColor, opacity?: number) => ({
    fontFamily: fontFamily?.regular,
    fontSize: 22,
    top: topA,
    color: getColor(color, opacity),
  }),
  h2: (color?: TColor, opacity?: number) => ({
    fontFamily: fontFamily?.regular,
    fontSize: 20,
    top: topA,
    color: getColor(color, opacity),
  }),
  h3: (color?: TColor, opacity?: number) => ({
    fontFamily: fontFamily?.bold,
    fontSize: 22,
    top: topA,
    color: getColor(color, opacity),
  }),
  h4: (color?: TColor, opacity?: number) => ({
    fontFamily: fontFamily?.bold,
    fontSize: 20,
    top: topA,
    color: getColor(color, opacity),
  }),
  h5: (color?: TColor, opacity?: number) => ({
    fontFamily: fontFamily?.bold,
    fontSize: 18,
    top: topC,
    color: getColor(color, opacity),
  }),
  l1: (color?: TColor, opacity?: number) => ({
    fontFamily: fontFamily?.bold,
    fontSize: 14,
    top: topB,
    color: getColor(color, opacity),
  }),
  p1: (color?: TColor, opacity?: number) => ({
    fontFamily: fontFamily?.regular,
    fontSize: 16,
    top: topA,
    color: getColor(color, opacity),
  }),
};
