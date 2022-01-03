export interface Continent {
  __typename: "Continent";
  code: string;
  name: string;
}
export interface Continents {
  continents: Continent[];
}

export interface Country {
  __typename: "Country";
  code: string;
  name: string;
  currency: string | null;
  continent: Continent
}

export interface Countries {
  countries: Country[];
}