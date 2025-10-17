"use client";
import React, { useState } from "react";

function Filters() {
  const [currentCategory, setCurrentCategory] = useState("All");
  return (
    <div className="flex items-center w-[90%] mx-auto gap-3">
      {["All", "Apartment", "Mansion", "Hotel", "Cabin", "Office"].map(
        (category) => {
          return (
            <button
              key={category}
              onClick={() => setCurrentCategory(category)}
              className={`rounded-full cursor-pointer text-sm font-medium px-6 py-1 ${
                currentCategory === category
                  ? "bg-sky-600 text-white"
                  : "bg-white text-gray-700 border border-gray-200"
              }`}
            >
              {category}
            </button>
          );
        }
      )}
    </div>
  );
}

export default Filters;
