import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type TBasicRoutesParamsList = {
  AuthedTemp: undefined;
};

export type TBasicRoutesStack = keyof TBasicRoutesParamsList;

export type TBasicRoutesStackScreenNavProp<
  ScreenName extends TBasicRoutesStack
> = StackNavigationProp<TBasicRoutesParamsList, ScreenName>;

export type TBasicRoutesStackScreenRouteProp<
  ScreenName extends TBasicRoutesStack
> = RouteProp<TBasicRoutesParamsList, ScreenName>;

export interface IBasicRoutesNavScreenProps<
  ScreenName extends TBasicRoutesStack
> {
  navigation: TBasicRoutesStackScreenNavProp<ScreenName>;
  route: TBasicRoutesStackScreenRouteProp<ScreenName>;
}
