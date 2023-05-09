export interface IData {
  country: string;
  region: string;
  population: number;
  area: number;
  flag: {
    png: string;
    svg: string;
    alt: string;
  };
}

export enum EDropType {
  sortBy = "Sort by",
  regions = "Regions",
}
