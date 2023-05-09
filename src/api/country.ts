import { publicApi } from "./config";

export const getAllCountries = async () => {
  // NOTE: api does not provide 'limit' property
  const response = await publicApi.get("all");
  return response?.data;
};
