import {
  TextInput as RNTextInput,
  TextInputProps,
  ViewStyle,
} from "react-native";
import { Ref } from "react";

export type TTextInputRef = Ref<RNTextInput>;

export interface ITextInputProps
  extends Omit<TextInputProps, "underlineColorAndroid"> {
  label: string;
  containerStyle?: ViewStyle;
  ref?: TTextInputRef;
}
