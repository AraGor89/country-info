import { IResponseData } from "../types";
import { publicApi } from "./config";

export const getAllCountries = async () => {
  // NOTE: api does not provide 'limit' property
  const response = await publicApi.get<IResponseData[]>("all");
  return response?.data;
};
