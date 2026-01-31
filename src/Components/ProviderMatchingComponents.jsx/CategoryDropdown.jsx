import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const categories = [
  "Home Improvements",
  "Education",
  "Entertainment",
  "Tradesman & Construction",
  "Transport",
  "Health & beauty",
  "Food & Drinks",
];

const CategoryDropdown = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("Select Category");

  const filteredCategories = categories.filter((cat) =>
    cat.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative">
      {/* SELECT BOX */}
      <div
        onClick={() => setOpen(!open)}
        className="w-full cursor-pointer border border-gray-300 rounded-md px-3 py-2 text-sm bg-white flex justify-between items-center"
      >
        <span>{selected}</span>
        <ChevronDown className="h-4 w-4 text-gray-500" />
      </div>

      {/* DROPDOWN POPUP */}
      {open && (
        <div className="absolute z-50 mt-2 w-[400px] rounded-lg right-0 bg-white shadow-lg">
          
          {/* SEARCH BAR */}
          <div className="p-3">
            <input
              type="text"
              placeholder="Search here"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
            />
          </div>

          {/* CATEGORY LIST */}
          <ul className="">
            {filteredCategories.map((cat, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelected(cat);
                  setOpen(false);
                  setSearch("");
                }}
                className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
