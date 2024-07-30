export interface Country {
  region: string;
  area: string;
  population: number;
  name: {
    common: string;
    official: string;
  };
  capital: string;
  subregion: string;
  currencies: { [key: string]: { name: string; symbol: string } };
  flags: { alt: string; svg: string; png: string };
}

export type Countries = Country[] | null;

export interface CountriesData {
  countries: Countries;
  loading: boolean;
  error: boolean;
}
