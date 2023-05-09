// TODO: fixe typification
export function formatData<T>(res: T[]) {
  if (!res?.length) return [];

  const data = res?.map((item: any) => {
    return {
      country: item?.name?.common,
      region: item?.region,
      population: item?.population,
      area: item?.area,
      flag: item?.flags,
    };
  });

  return data;
}
