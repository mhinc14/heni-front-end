import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "gql/countries.query.gql";
import { Countries } from "model";

export const useCountries = () => {
  const { data, ...rest } = useQuery<Countries>(GET_COUNTRIES);
  return { ...rest, countries: data?.countries };
};