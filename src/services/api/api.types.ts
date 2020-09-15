import { GeneralApiProblem } from "./apiProblem";

export type TApiResponse<T> = { kind: "ok"; payload: T } | GeneralApiProblem;
