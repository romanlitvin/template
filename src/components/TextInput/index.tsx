import React, { forwardRef } from "react";

import { View, TextInput as RNTextInput } from "react-native";

import Text from "../Text";

import { ITextInputProps, TTextInputRef } from "./textinput.props";

import styles from "./styles";

const TextInput: React.FC<ITextInputProps> = forwardRef(
  (props, ref: TTextInputRef) => (
    <View style={[styles.container, props.containerStyle]}>
      <Text style={styles.label} t={props.label} />
      <RNTextInput
        ref={ref}
        {...props}
        underlineColorAndroid={"transparent"}
        style={[styles.input, props.style]}
      />
    </View>
  ),
);

export default React.memo(TextInput);
