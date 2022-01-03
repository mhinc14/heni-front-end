import { useQuery } from "@apollo/client";
import { GET_CONTINENTS } from "gql/continents.query.gql";
import { Continents } from "model";

export const useContinents = () => {
  const { data, ...rest } = useQuery<Continents>(GET_CONTINENTS);
  return { ...rest, continents: data?.continents };
};