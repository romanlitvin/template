import { ComponentType } from "react";
import { ListRenderItem, Insets } from "react-native";

export type TShouldBeRemoved = any;

export type TKeyOf<T> = keyof T;

export type TValueOf<T> = T[TKeyOf<T>];

export type TStringMap<T> = { [key: string]: T };

export type TNumberMap<T> = { [key: number]: T };

export type TComposeFCHOC<T = {}> = (
  ...props: TShouldBeRemoved
) => ComponentType<T>;

export type TRenderItem<T> = ListRenderItem<T>;

export type TKeyExtractor<T> = (data: T, index: number) => string;

export type THitSlopsTypes = "small" | "medium";

export type THitSlops = Readonly<{ [key in THitSlopsTypes]: Insets }>;

export type TSignInCredentials = { email: string; password: string };

export type TNameIdMap = { id: string; name: string };
export type TSocialNameTypes = "Facebook" | "Google" | "Apple" | "Vk";
