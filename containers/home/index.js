import Countries from "@/components/countries";
import { getData } from "@/services/countries";
import { notFound } from "next/navigation";
import React from "react";

async function HomeContainer() {
  const countries = await getData();
  if (!countries) {
    notFound();
  }
  return (
    <main className="flex min-h-screen flex-col overflow-y-hidden">
      <Countries data={countries} />
    </main>
  );
}

export default HomeContainer;
