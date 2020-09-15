import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type TRootStackParamsList = {
  BasicRoutes: undefined;
  SignIn: undefined;
};

export interface IRootStackProps {
  isLoggedIn: boolean;
}

export type TRootStack = keyof TRootStackParamsList;

export type TRootStackScreenNavProp<
  ScreenName extends TRootStack
> = StackNavigationProp<TRootStackParamsList, ScreenName>;

export type TRootStackScreenRouteProp<
  ScreenName extends TRootStack
> = RouteProp<TRootStackParamsList, ScreenName>;

export interface IRootNavScreenProps<ScreenName extends TRootStack> {
  navigation: TRootStackScreenNavProp<ScreenName>;
  route: TRootStackScreenRouteProp<ScreenName>;
}
