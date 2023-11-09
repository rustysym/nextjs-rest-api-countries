"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import DropDown from "../dropdown";

function Countries({ data = [] }) {
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  };

  return (
    <main className="flex flex-col bg-light-background dark:bg-dark-blue-background min-h-screen p-10">
      <div className="flex flex-col justify-between w-full md:flex-row px-1 lg:px-28">
        <div className="flex flex-row ">
          <AiOutlineSearch className="absolute self-center ml-4" />
          <input
            onChange={(e) => searchItems(e.target.value)}
            placeholder="Search for a country"
            className="px-12 bg-elements-white dark:bg-dark-blue-elements h-10 rounded-md text-sm w-full md:w-96"
          />
        </div>
        <DropDown />
      </div>
      <div className="container mx-auto mt-10">
        <div className="flex flex-wrap -mx-3 md:-mx-12">
          {searchInput.length > 1
            ? filteredResults.map((val, key) => (
                <div
                  className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4 hover:scale-105 transition-transform"
                  key={key}
                >
                  <Link
                    href={`countries/${val?.name.common}`}
                    className="c-card block bg-elements-white dark:bg-dark-blue-elements dark:shadow-md hover:shadow-xl rounded-lg overflow-hidden"
                  >
                    <div className="relative pb-48 overflow-hidden">
                      <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src={val.flags.svg}
                        alt={`${val?.flags.alt}`}
                      />
                    </div>
                    <div className="p-4">
                      <h1 className="font-bold capitalize  text-md">
                        {val?.name.common}
                      </h1>
                      <h2 className="mt-2 mb-2 text-sm font-bold">
                        Population:
                        <span className="font-light">
                          {" "}
                          {`${val?.population.toLocaleString()}`}
                        </span>
                      </h2>
                      <h2 className="mt-2 mb-2 text-sm font-bold">
                        Region:
                        <span className="font-light"> {val?.region}</span>
                      </h2>
                      <h2 className="mt-2 mb-2 text-sm font-bold">
                        Capital:
                        <span className="font-light"> {val?.capital}</span>
                      </h2>
                    </div>
                  </Link>
                </div>
              ))
            : data.map((val, key) => (
                <div
                  className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4 hover:scale-105 transition-transform"
                  key={key}
                >
                  <Link
                    href={`countries/${val?.name.common}`}
                    className="c-card block bg-elements-white dark:bg-dark-blue-elements dark:shadow-md hover:shadow-xl rounded-lg overflow-hidden"
                  >
                    <div className="relative pb-48 overflow-hidden">
                      <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src={val?.flags.svg}
                        alt={`${val?.flags.alt}`}
                      />
                    </div>
                    <div className="p-4">
                      <h1 className="font-bold capitalize  text-md">
                        {val?.name.common}
                      </h1>
                      <h2 className="mt-2 mb-2 text-sm font-bold">
                        Population:
                        <span className="font-light">
                          {" "}
                          {`${val?.population.toLocaleString()}`}
                        </span>
                      </h2>
                      <h2 className="mt-2 mb-2 text-sm font-bold">
                        Region:
                        <span className="font-light"> {val?.region}</span>
                      </h2>
                      <h2 className="mt-2 mb-2 text-sm font-bold">
                        Capital:
                        <span className="font-light"> {val?.capital}</span>
                      </h2>
                    </div>
                  </Link>
                </div>
              ))}
        </div>
      </div>
    </main>
  );
}

export default Countries;
