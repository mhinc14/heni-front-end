import { useState } from "react";
import CountriesList from "components/countriesList";
import Pagination from "components/pagination";
import { useCountries } from "gql/hooks/useCountries";
import Page from "layouts/page";

const ITEMS_PER_PAGE = 12;

export default function CountriesContainer() {
  const { countries, loading } = useCountries();
  const [offset, setOffset] = useState<number>(0);
  const pageCount = countries && Math.round(countries.length / ITEMS_PER_PAGE);
  const countriesSubset = countries?.slice(offset, offset + ITEMS_PER_PAGE);
  const handlePageChange: (page: number) => void = (page) => {
    const offset = (page - 1) * ITEMS_PER_PAGE;
    setOffset(offset);
  };

  return (
    <Page
      title={<h1>Countries</h1>}
      toolbar={
        <Pagination
          count={pageCount}
          onChange={handlePageChange}
          loading={loading}
        />
      }
      content={<CountriesList countries={countriesSubset} loading={loading} />}
    />
  );
}
