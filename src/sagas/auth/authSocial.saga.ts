import { call, spawn } from "redux-saga/effects";
import { AccessToken, LoginManager } from "react-native-fbsdk";
import { GoogleSignin } from "@react-native-community/google-signin";
import appleAuthAsync, {
  AppleAuthRequestOperation,
  AppleAuthRequestScope,
  AppleAuthCredentialState,
  AppleAuthRequestResponse,
} from "@invertase/react-native-apple-authentication";

import { api } from "../../services/api";

const GOOGLE_CLIENT_ID = "GOOGLE_CLIENT_ID";

function* facebookAuth() {
  try {
    const response = yield call(LoginManager.logInWithPermissions, [
      "public_profile",
    ]);
    if (response.isCancelled) {
      throw new Error("login facebook is cancelled.");
    }
    const { accessToken } = yield call(AccessToken.getCurrentAccessToken);
    const customer = yield call(api.getFacebookCustomer, accessToken);
    return { ...customer, accessToken };
  } catch (err) {
    console.log("err with facebook auth", err);
    return {};
  }
}

function* googleAuth() {
  try {
    GoogleSignin.configure({
      scopes: ["https://www.googleapis.com/auth/plus.login"],
      webClientId: GOOGLE_CLIENT_ID,
      offlineAccess: true,
      iosClientId: GOOGLE_CLIENT_ID,
    });
    const playServicesEnabled = yield call(GoogleSignin.hasPlayServices, {
      showPlayServicesUpdateDialog: true,
    });
    if (playServicesEnabled) {
      const user = yield call(GoogleSignin.signIn);
      const { accessToken } = yield call(GoogleSignin.getTokens);
      return { ...user, accessToken };
    }
  } catch (err) {
    console.log("err with google auth", err);
    return {};
  }
}

function* appleAuth() {
  try {
    const userCredentials: AppleAuthRequestResponse = yield call(
      appleAuthAsync.performRequest,
      {
        requestedOperation: AppleAuthRequestOperation.LOGIN,
        requestedScopes: [
          AppleAuthRequestScope.EMAIL,
          AppleAuthRequestScope.FULL_NAME,
        ],
      },
    );
    const credentialState = yield call(
      appleAuthAsync.getCredentialStateForUser,
      userCredentials.user,
    );

    if (credentialState === AppleAuthCredentialState.AUTHORIZED) {
      return userCredentials;
    }

    return {};
  } catch (err) {
    console.log("err with apple auth", err);
    return {};
  }
}

function* signInSocial() {
  try {
    const socialName = "" as any;
    switch (socialName) {
      case "Apple": {
        yield call(appleAuth);
        break;
      }
      case "Google": {
        yield call(googleAuth);
        break;
      }
      case "Facebook": {
        yield call(facebookAuth);
        break;
      }
    }
  } catch (err) {
    console.log("error social auth", err);
  }
}

export function* socialLogOut() {
  try {
    const prevUser = { socialName: "Apple" };
    switch (prevUser.socialName) {
      case "Facebook": {
        yield call(LoginManager.logOut);
        break;
      }
      case "Google": {
        yield call(GoogleSignin.signOut);
        break;
      }
    }
  } catch (err) {
    console.log("error social log out");
  }
}

export default function* () {
  yield spawn(signInSocial);
}
