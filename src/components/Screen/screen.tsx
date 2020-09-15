import React from "react";

import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { IScreenProps } from "./screen.props";
import { isNonScrolling, offsets, presets } from "./screen.presets";
import { isIOS } from "../../constants";

import StatusBar from "../StatusBar";

function ScreenWithoutScrolling(props: IScreenProps) {
  const preset = presets.fixed;
  const style = props.style || {};
  const backgroundStyle = props.backgroundColor
    ? { backgroundColor: props.backgroundColor }
    : {};
  const Wrapper = props.unsafe ? View : SafeAreaView;

  return (
    <KeyboardAvoidingView
      style={[preset.outer, backgroundStyle]}
      behavior={isIOS ? "padding" : undefined}
      keyboardVerticalOffset={offsets[props.keyboardOffset || "none"]}>
      <StatusBar barStyle={props.statusBar || "light-content"} />
      <Wrapper style={[preset.inner, style]}>{props.children}</Wrapper>
    </KeyboardAvoidingView>
  );
}

function ScreenWithScrolling(props: IScreenProps) {
  const preset = presets.scroll;
  const style = props.style || {};
  const backgroundStyle = props.backgroundColor
    ? { backgroundColor: props.backgroundColor }
    : {};
  const Wrapper = props.unsafe ? View : SafeAreaView;

  return (
    <KeyboardAvoidingView
      style={[preset.outer, backgroundStyle]}
      behavior={isIOS ? "padding" : undefined}
      keyboardVerticalOffset={offsets[props.keyboardOffset || "none"]}>
      <StatusBar barStyle={props.statusBar || "light-content"} />
      <Wrapper style={[preset.outer, backgroundStyle]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[preset.outer, backgroundStyle]}
          contentContainerStyle={[preset.inner, style]}>
          {props.children}
        </ScrollView>
      </Wrapper>
    </KeyboardAvoidingView>
  );
}

export default function Screen(props: IScreenProps) {
  if (isNonScrolling(props.preset)) {
    return <ScreenWithoutScrolling {...props} />;
  }
  return <ScreenWithScrolling {...props} />;
}
