"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function RadioBtn() {
  const [selectedOption, setSelectedOption] = useState("checked");
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <div>
      <div className="flex justify-between items-center bg-[#e7f7fb] py-6">
        <div className="text-black text-xl font-semibold px-5 flex cursor-pointer">
          <input
            id="country-option-1"
            type="radio"
            name="countries"
            value="checked"
            checked={selectedOption === "checked"}
            onChange={handleOptionChange}
            className="h-6 w-6 focus:ring-blue-300 cursor-pointer"
          />
          <label
            htmlFor="country-option-1"
            className="ml-2 block text-black text-xl font-semibold cursor-pointer"
          >
            Buy now
          </label>
        </div>
        <div className="text-emerald-500 text-xl font-semibold px-5 cursor-pointer">
          USD $5,000
        </div>
      </div>
      <div className="px-5">
        <hr />
      </div>
      <div className="bg-[#e7f7fb]">
        <button onClick={toggleTextVisibility} className="">
          <div className="flex justify-between items-center py-6">
            <div className="text-black text-xl font-semibold px-5 flex cursor-pointer">
              <input
                id="country-option-2"
                type="radio"
                name="countries"
                value="Lease to own"
                checked={selectedOption === "Lease to own"}
                onChange={handleOptionChange}
                className="h-6 w-6 focus:ring-blue-30 cursor-pointer"
              />
              <label
                htmlFor="country-option-2"
                className="ml-2 block text-black text-xl font-semibold cursor-pointer"
              >
                Lease to own
              </label>
            </div>
            <div className="text-emerald-500 text-xl font-semibold px-5 md:ms-12 cursor-pointer">
              USD $109
              <p
                className="text-black text-xs font-light p-0 m-0 text-end"
                style={{ marginBottom: "-10px;" }}
              >
                /month
              </p>
            </div>
          </div>
          {/* <p
            className="text-black text-xs font-light p-0 m-0 text-end"
            style={{ marginBottom: "-100px;", backgroundColor: "red" }}
          >
            /month
          </p> */}
        </button>
        {isTextVisible && (
          <div className="px-5 pb-4">
            <p className="text-[#143860]">
              Pick the price that matches your budget.
            </p>
            <div
              className="p-2 rounded-md my-2 bg-white"
              style={{ border: "1px solid #8795AA" }}
            >
              <div className="flex">
                <div
                  className="w-1/2"
                  style={{ borderRight: "1px solid #8795AA" }}
                >
                  <h5 className="text-base font-medium">USD $109</h5>
                  <h6 className="text-xs font-normal text-[#8795AA]">
                    Monthly Payment
                  </h6>
                </div>
                <div className="w-1/2 ps-2">
                  <h5 className="text-base font-medium">60</h5>
                  <h6 className="text-xs font-normal text-[#8795AA]">Months</h6>
                </div>
              </div>
            </div>
            <p className="pb-2">Full ownership after 60 months</p>
            <Link
              href="/"
              className="underline text-[#0000009d] hover:text-[#000000]"
            >
              More information
            </Link>
          </div>
        )}
      </div>
      <div className="px-5">
        <hr />
      </div>
    </div>
  );
}
