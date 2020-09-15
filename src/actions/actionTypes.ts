import { TStringMap } from "../types";

const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";
const defaultTypes: string[] = [REQUEST, SUCCESS, FAILURE];

const createRequestTypes = (base: string, types = defaultTypes) => {
  const res: TStringMap<string> = {};
  types.forEach((type: string) => (res[type] = `${base}_${type}`));
  return res;
};

export const SIGN_IN = createRequestTypes("SIGN_IN");
export const SIGN_OUT = createRequestTypes("SIGN_OUT");

export const INIT_APP = "INIT_APP";
