import React, { forwardRef, memo, Ref } from "react";

import { FlatList, FlatListProps } from "react-native";
import { TShouldBeRemoved } from "../types";

export type TFlatListProps<T> = FlatListProps<T>;
export type TExtendedFlatListProps<T> = Omit<
  TFlatListProps<T>,
  "data" | "renderItem"
>;

export default memo(
  forwardRef(
    (
      props: FlatListProps<TShouldBeRemoved>,
      ref: Ref<FlatList<TShouldBeRemoved>>,
    ) => (
      <FlatList
        {...props}
        data={props.data && Array.isArray(props.data) ? props.data : []}
        ref={ref}
      />
    ),
  ),
);
