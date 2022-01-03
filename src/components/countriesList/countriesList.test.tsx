import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CountriesList from "components/countriesList";
import { Country } from "model";

const countries: Country[] = [
  {
    __typename: "Country",
    code: "AD",
    name: "Andorra",
    currency: "EUR",
    continent: {
      __typename: "Continent",
      code: "EU",
      name: "Europe",
    },
  },
  {
    __typename: "Country",
    code: "AE",
    name: "United Arab Emirates",
    currency: "AED",
    continent: {
      __typename: "Continent",
      code: "EU",
      name: "Europe",
    },
  },
];

test("Countries list displays country name", () => {
  render(<CountriesList countries={countries} loading={false} />);
  const text = screen.getByText("Andorra");
  expect(text).toBeInTheDocument();
});

test("Countries list displays loading element", () => {
  render(<CountriesList countries={countries} loading={true} />);
  const text = screen.getByTestId("countries-loader");
  expect(text).toBeInTheDocument();
});
