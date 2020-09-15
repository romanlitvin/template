import { ApisauceInstance, create, ApiResponse } from "apisauce";

import { getGeneralApiProblem } from "./apiProblem";
import { IApiConfig, DEFAULT_API_CONFIG } from "./apiConfig";

import { TShouldBeRemoved } from "../../types";

export class Api {
  //@ts-ignore
  apisauce: ApisauceInstance;
  config: IApiConfig;

  constructor(config: IApiConfig = DEFAULT_API_CONFIG) {
    this.config = config;
  }

  setup = (): void => {
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: { Accept: "application/json" },
    });
  };

  public signIn = async () => {
    const response: ApiResponse<TShouldBeRemoved> = await this.apisauce.get(
      `/signIn`,
    );

    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) {
        return problem;
      }
    }

    try {
      return { kind: "ok" };
    } catch {
      return { kind: "bad-data" };
    }
  };

  public signOut = async () => {
    const response: ApiResponse<TShouldBeRemoved> = await this.apisauce.get(
      `/signOut`,
    );

    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) {
        return problem;
      }
    }

    try {
      return { kind: "ok" };
    } catch {
      return { kind: "bad-data" };
    }
  };

  public async getFacebookCustomer(_token: string) {
    //`https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=${token}`
    const response: ApiResponse<any> | undefined = await this.apisauce?.get(
      `/facebookAuth`,
    );

    if (!response?.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) {
        return problem;
      }
    }

    try {
      return { kind: "ok" };
    } catch {
      return { kind: "bad-data" };
    }
  }
}

export const api = new Api();
