"use client";
import React, { useState } from "react";

export default function RadioBtn() {
  const [selectedOption, setSelectedOption] = useState("checked");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <div>
        <div className="flex justify-between items-center bg-teal-50 py-6">
          <div className="text-black text-xl font-semibold px-5 flex">
            <input
              id="country-option-1"
              type="radio"
              name="countries"
              value="checked"
              checked={selectedOption === "checked"}
              onChange={handleOptionChange}
              className="h-6 w-6 focus:ring-blue-300"
            />
            <label
              htmlFor="country-option-1"
              className="ml-2 block text-black text-xl font-semibold"
            >
              Buy now
            </label>
          </div>
          <div className="text-emerald-500 text-xl font-semibold px-5">
            USD $5,000
          </div>
        </div>
        <div className="px-5">
          <hr />
        </div>
        <div className="flex justify-between items-center bg-teal-50 py-6">
          <div className="text-black text-xl font-semibold px-5 flex">
            <input
              id="country-option-2"
              type="radio"
              name="countries"
              value="Lease to own"
              checked={selectedOption === "Lease to own"}
              onChange={handleOptionChange}
              className="h-6 w-6 focus:ring-blue-30"
            />
            <label
              htmlFor="country-option-2"
              className="ml-2 block text-black text-xl font-semibold"
            >
              Lease to own
            </label>
          </div>
          <div className="text-emerald-500 text-xl font-semibold px-5">
            USD $109
          </div>
        </div>
      </div>
    </div>
  );
}
