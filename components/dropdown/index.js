import React from "react";

function DropDown() {
  function showDropdownOptions() {
    document.getElementById("options").classList.toggle("hidden");
    document.getElementById("arrow-up").classList.toggle("hidden");
    document.getElementById("arrow-down").classList.toggle("hidden");
  }
  return (
    <div className="flex-none mt-10 md:mt-0 z-10">
      <button
        onClick={() => showDropdownOptions()}
        className="flex flex-row justify-between w-48 px-2 py-2 bg-elements-white dark:bg-dark-blue-elements rounded-md shadow focus:outline-none focus:border-blue-600"
      >
        <span className="select-none text-sm self-center pl-2 font-light">
          Filter by Region
        </span>

        <svg
          id="arrow-down"
          className="hidden w-6 h-6 stroke-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          id="arrow-up"
          className="w-6 h-6 stroke-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        id="options"
        className="hidden absolute w-48 py-2 mt-2 bg-elements-white dark:bg-dark-blue-elements rounded-lg shadow-xl text-sm font-light"
      >
        <a
          href="#"
          className="block px-4 py-1 hover:bg-gray-200 dark:hover:bg-gray-400 "
        >
          Africa
        </a>
        <a
          href="#"
          className="block px-4 py-1 hover:bg-gray-200 dark:hover:bg-gray-400"
        >
          America
        </a>
        <a
          href="#"
          className="block px-4 py-1 hover:bg-gray-200 dark:hover:bg-gray-400"
        >
          Asia
        </a>
        <a
          href="#"
          className="block px-4 py-1 hover:bg-gray-200 dark:hover:bg-gray-400"
        >
          Europe
        </a>
        <a
          href="#"
          className="block px-4 py-1 hover:bg-gray-200 dark:hover:bg-gray-400"
        >
          Ocenia
        </a>
      </div>
    </div>
  );
}

export default DropDown;
