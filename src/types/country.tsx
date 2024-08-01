export interface Country {
  region: string;
  area: string;
  population: number;
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  capital: string;
  subregion: string;
  currencies: { [key: string]: { name: string; symbol: string } };
  flags: { alt: string; svg: string; png: string };
  tld: string[];
  languages: { [key: string]: string };
  cca3: string;
  borders?: string[];
}

export type Countries = Country[] | null;

export interface CountriesData {
  countries: Countries;
  loading: boolean;
  error: boolean;
}
