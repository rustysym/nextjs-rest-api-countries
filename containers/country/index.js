"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import BackButton from "@/components/back";

function CountryContainer({ data }) {
  const [borders, setBorders] = useState([]);
  const response = useRef(false);
  useEffect(() => {
    setBorders([]);
    if (!response.current) {
      response.current = true;
      data[0].borders?.map(async (border) => {
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha/${border}?fields=name`
        );
        const {
          name: { common },
        } = await res.json();
        return setBorders((borders) => [...borders, common]);
      });
    }
  }, []);
  function getNativeName(country) {
    if (country[0].name?.nativeName) {
      const nativeNameKey = Object.keys(country[0].name.nativeName)[0];
      return country[0].name.nativeName[nativeNameKey].common;
    }
    return "-";
  }
  function getCurrencies(country) {
    if (country.currencies) {
      const currencies = [];

      Object.keys(country.currencies).forEach((key) => {
        currencies.unshift(country.currencies[key].name);
      });
      return currencies.join(", ");
    }
    return "-";
  }
  function getLanguages(country) {
    if (country.languages !== undefined) {
      const languages = [];

      Object.keys(country.languages).forEach((key) => {
        languages.unshift(country.languages[key]);
      });
      return languages.join(", ");
    }
    return "-";
  }

  return (
    <div className="flex flex-col dark:bg-dark-blue-background bg-light-background min-h-screen">
      {data.map((items, i) => (
        <div className="mx-10 lg:mx-32" key={i}>
          <BackButton />
          <div className="flex flex-row ">
            <div className="flex flex-col lg:flex-row lg:space-x-12">
              <div className="flex flex-col w-full h-auto lg:w-[80%] lg:h-80 mt-6">
                <Image
                  src={items?.flags.svg}
                  width={500}
                  height={500}
                  alt={`${items?.flags.alt}`}
                  priority
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex flex-col w-full mt-8">
                  <h1 className="text-2xl font-bold mb-8">
                    {items.name?.common}
                  </h1>
                  <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-24 lg:space-y-0">
                    <div className="space-y-2 lg:space-y-1">
                      <h2 className="text-sm font-light">
                        Native Name:{" "}
                        <span className="text-light-text dark:text-gray-300">{`${getNativeName(
                          data
                        )}`}</span>
                      </h2>
                      <h2 className="text-sm font-light">
                        Population:{" "}
                        <span className="text-light-text dark:text-gray-300">
                          {items?.population.toLocaleString("en-US")}
                        </span>
                      </h2>
                      <h2 className="text-sm font-light">
                        Region:{" "}
                        <span className="text-light-text dark:text-gray-300">{items?.region}</span>
                      </h2>
                      <h2 className="text-sm font-light">
                        Sub Region:{" "}
                        <span className="text-light-text dark:text-gray-300">
                          {items?.subregion}
                        </span>
                      </h2>
                      <h2 className="text-sm font-light">
                        Capital:{" "}
                        <span className="text-light-text dark:text-gray-300">{items?.capital}</span>
                      </h2>
                    </div>
                    <div className="space-y-2 lg:space-y-1">
                      <h2 className="text-sm font-light">
                        Top Level Domain:{" "}
                        <span className=" text-light-text dark:text-gray-300">
                          {items?.tld ? items?.tld.join(", ") : "N/A"}
                        </span>
                      </h2>
                      <h2 className="text-sm font-light">
                        Currencies:{" "}
                        <span className="text-light-text dark:text-gray-300">
                          {getCurrencies(items)}
                        </span>
                      </h2>
                      <h2 className="text-sm font-light">
                        Language:{" "}
                        <span className="text-light-text dark:text-gray-300">
                          {getLanguages(items)}
                        </span>
                      </h2>
                    </div>
                  </div>
                  <div className="mt-8 mb-12">
                  <span className="mt-4 text-md">Border Countries:</span>
                  {borders.length ? (
                    <div className="flex flex- flex-wrap gap-4 mt-4">
                      {borders.map((name, i) => (
                        <Link key={i} href={`${name}`} aria-label={`${name}`}>
                          <button className="w-[5rem] md:w-[8.45rem]  h-9 lg:h-10 px-[0.5rem] lg:px-[1rem] py-[0.3rem] flex justify-center items-center bg-elements-white dark:bg-dark-blue-elements rounded-[0.3125rem] shadow-md shadow-box-shadow hover:scale-105 transition-transform">
                            <p className="truncate">{name}</p>
                          </button>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <span className="mt-6 text-xs">N/A</span>
                  )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CountryContainer;
