import CountryContainer from "@/containers/country";
import React from "react";
import { notFound } from "next/navigation";
import { getCountry } from "@/services/countries";
async function CountriesPage({ params }) {
  const countries = await getCountry(params.id);
  if (!countries) {
    notFound();
  }
  return <CountryContainer data={countries} />;
}

export default CountriesPage;
