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

export interface IResponseData {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: { [key: string]: { name: string; symbol: string } };
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: { [key: string]: string };
  translations: { [key: string]: { official: string; common: string } };
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: { [key: string]: { [key: string]: string } };
  flag: string;
  maps: { [key: string]: string };
  population: number;
  gini: { [key: string]: number };
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface PostalCode {
  format: string;
  regex: string;
}

export interface Car {
  signs: string[];
  side: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface CoatOfArms {
  png: string;
  svg: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: { [key: string]: { official: string; common: string } };
}

export interface Idd {
  root: string;
  suffixes: string[];
}
