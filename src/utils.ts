import { IData, IResponseData } from "./types";

export const formatResponseData = (res: IResponseData[]): IData[] => {
  if (!res?.length) return [];

  const data = res?.map((item: IResponseData) => {
    return {
      country: item?.name?.common,
      region: item?.region,
      population: item?.population,
      area: item?.area,
      flag: item?.flags,
    };
  });

  return data;
};
