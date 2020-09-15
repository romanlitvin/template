import { API_URL as API_URL_DEV } from "./env.dev";
import { API_URL as API_URL_PROD } from "./env.prod";

export default __DEV__ ? API_URL_DEV : API_URL_PROD;
