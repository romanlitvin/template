import { Api } from "../services/api";

export class Environment {
  private static api: Api;

  constructor() {
    Environment.api = new Api();
  }

  public static apiInstance() {
    return Environment.api;
  }

  public setup = async () => {
    await Environment.api.setup();
    if (__DEV__) {
      const Reactotron = await import("../services/reactotron");
      Reactotron.default.connect();
    }
  };
}

export const createEnvironment = async () => {
  const env = new Environment();
  await env.setup();
  return env;
};
