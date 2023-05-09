import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { store } from "../store/store";
import { setLoading } from "../store/features/main/mainSlice";

export const base =
  // TODO: should be in env file
  process.env.REACT_APP_API_BASE_URL || "https://restcountries.com/v3.1/";

export const publicApi = axios.create({ baseURL: base });

export const errorHandler = (error: AxiosError | Error) => {
  store.dispatch(setLoading(false));

  // TODO: handle errors
  console.log(error.message);
};

publicApi.interceptors.request.use((request: InternalAxiosRequestConfig) => {
  store.dispatch(setLoading(true));
  return request;
}, errorHandler);

publicApi.interceptors.response.use((response: AxiosResponse) => {
  store.dispatch(setLoading(false));
  return response;
}, errorHandler);
