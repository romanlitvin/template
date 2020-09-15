import API_URL from "../../config/env";

export interface IApiConfig {
  url: string;
  timeout: number;
}

export const DEFAULT_API_CONFIG: IApiConfig = {
  url: API_URL || "https://jsonplaceholder.typicode.com",
  timeout: 10000,
};
