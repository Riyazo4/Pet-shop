import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { BiChevronDown } from "react-icons/bi";

import States from "../../assets/Data/Country";

const CountryDrop = () => {
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setSelected("");
    setQuery("");
  };

  const handleItemClick = (item) => {
    setSelected(item);
    setIsOpen(false);
    setQuery("");
  };

  return (
    <div className="relative">
      <div className="relative w-44">
        <div
          onClick={toggleDropdown}
          className="p-1 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none font-bold w-44 flex items-center justify-between"
        >
          {selected || "Select State"}
          <div className="flex cursor-pointer">
            {selected && (
              <IoIosClose
                size={20}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected("");
                }}
              />
            )}
            <BiChevronDown size={20} className={isOpen ? "rotate-180" : ""} />
          </div>
        </div>

        {isOpen && (
          <div className="absolute z-10 mt-1 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <div>
              <input
                className="p-1  text-gray-900
                     bg-white border
                   rounded-md shadow-sm outline-none appearance-none
                  focus:border-orange-500
                   font-bold w-44 "
                type="text"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
              />
            </div>

            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200 overflow-scroll h-52"
              aria-labelledby="dropdownDefaultButton"
            >
              {States.filter((state) =>
                state.name.toLowerCase().includes(query)
              ).map((state) => (
                <li
                  className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  key={state.id}
                  onClick={() => handleItemClick(state.name)}
                >
                  {state.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryDrop;
