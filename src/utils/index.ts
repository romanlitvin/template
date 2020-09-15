import * as R from "ramda";
import { TNameIdMap, TShouldBeRemoved } from "../types";

const convertToPicker = (value: TShouldBeRemoved) => ({
  value: value.id,
  label: value.name,
});
export const extractNameIdMap = <T extends TNameIdMap>({ id, name }: T) => ({
  id,
  name,
});

export const findById = <T extends { id: string | number }>(
  id: number | string,
) => R.find<T>(R.propEq("id")(id));
export const notEqual = <T>(value: T) => R.pipe(R.equals<T>(value), R.not);
export const filterNot = <T>(value: T) => R.filter(notEqual<T>(value));

export const convertStringArrToPicker = R.map(convertToPicker);
export const getIds = R.map(R.prop("id"));
export const getNames = R.map(R.prop("name"));
export const getJoinedNames = R.pipe(R.map(R.prop("name")), R.join(", "));
export const isResponseSuccess = R.equals("ok");
