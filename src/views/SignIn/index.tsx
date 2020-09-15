import React, { useState, useRef } from "react";

import { Button, TextInput as RNTextInput, View } from "react-native";
import { AppleButton } from "@invertase/react-native-apple-authentication";
import { GoogleSigninButton } from "@react-native-community/google-signin";
import { LoginButton } from "react-native-fbsdk";

import { TSignInProps } from "./SignIn.props";
import { ISignInRequest } from "../../actions/auth";
import styles from "./styles";

import container from "./SignIn.container";
import Screen from "../../components/Screen/screen";
import TextInput from "../../components/TextInput";

const SignIn: React.FC<TSignInProps> = ({ signIn }) => {
  const passInputRef = useRef<RNTextInput>(null);

  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  const onSubmit = (): ISignInRequest => signIn({ email, password: pass });

  const focusPass = (): void => passInputRef.current?.focus();

  const onAppleButtonPress = async () => {};

  const onGoogleButtonPress = async () => {};

  return (
    <Screen>
      <TextInput
        blurOnSubmit={false}
        autoFocus
        returnKeyType={"next"}
        onSubmitEditing={focusPass}
        keyboardType={"email-address"}
        onChangeText={setEmail}
        containerStyle={styles.inputContainer}
        label={"Email"}
      />
      <TextInput
        onSubmitEditing={onSubmit}
        returnKeyType={"go"}
        ref={passInputRef}
        secureTextEntry
        onChangeText={setPass}
        containerStyle={styles.inputContainer}
        label={"Password"}
      />
      <Button title={"Submit"} onPress={onSubmit} />
      <View style={styles.socialAuthButtonsContainer}>
        <AppleButton
          buttonStyle={AppleButton.Style.WHITE_OUTLINE}
          buttonType={AppleButton.Type.SIGN_IN}
          style={styles.appleAuthButton}
          onPress={onAppleButtonPress}
        />
        <GoogleSigninButton onPress={onGoogleButtonPress} />
        <LoginButton />
      </View>
    </Screen>
  );
};

export default container(SignIn);
