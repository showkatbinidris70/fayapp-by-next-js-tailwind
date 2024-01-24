"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";

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
              className="p-2 rounded-md mt-2 bg-white"
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
            <div class="arrow-down"></div>
            <div className="flex justify-between items-center my-3">
              <div className="bg-[#1AAFD0] rounded-lg">
                <AiOutlineMinus className="m-2 text-white text-2xl" />
              </div>
              <div>
                {/* <div class="progress-bar w-48">
                  <div
                    class="progress-bar-inner"
                    style={{ width: "60%" }}
                  ></div>
                </div> */}
                {/* <div className="slider-wrapper">
                  <div className="range-slider">
                    <div
                      className="range-slider__bubble"
                      style={{ left: "calc(100% - 13px)" }}
                    >
                      <input
                        className="range-slider__range installmentCount"
                        max="60"
                        min="2"
                        type="range"
                        value="60"
                      >
                        60
                      </input>
                    </div>
                    <svg
                      fill="none"
                      height="16"
                      viewBox="0 0 24 12"
                      width="12"
                      xmlns="http://www.w3.org/200/svg"
                    >
                      <path
                        d="M0.828426 -4L23.1716 -4C24.9534 -4 25.8457 -1.84572 24.5858 -0.58579L13.4142 10.5858C12.6332 11.3668 11.3668 11.3668 10.5858 10.5858L-0.585787 -0.585786C-1.84572 -1.84572 -0.953382 -4 0.828426 -4Z"
                        fill="white"
                        stroke="#8795AA"
                      ></path>
                    </svg>
                  </div>
                  <div className="year-stops">
                    <span className="year-stop" style={{ left: "-6px" }}></span>
                    <span
                      className="year-stop"
                      style={{ left: "30.13881355932203px" }}
                    ></span>
                    <span
                      className="year-stop"
                      style={{ left: "73.50538983050848px" }}
                    ></span>
                    <span
                      className="year-stop"
                      style={{ left: "116.87196610169491px" }}
                    ></span>
                    <span
                      className="year-stop"
                      style={{ left: "160.23854237288137px" }}
                    ></span>
                    <span
                      className="year-stop"
                      style={{ left: "203.6051186440678px" }}
                    ></span>
                  </div>
                </div> */}
                <div class="w-64">
                  <div class="row justify-content-center">
                    <div class="">
                      <div class="range-item">
                        <div class="range-input d-flex position-relative">
                          {/* <input
                            type="range"
                            min="0"
                            max="18"
                            class="form-range"
                            name="dataShared"
                            value="12"
                          /> */}
                          <div class="range-line">
                            <span class="active-line"></span>
                          </div>
                          <div class="dot-line">
                            <span class="active-dot"></span>
                          </div>
                        </div>
                        {/* <ul class="list-inline list-unstyled">
                          <li class="list-inline-item">
                            <span></span>
                          </li>
                          <li class="list-inline-item">
                            <span></span>
                          </li>
                          <li class="list-inline-item">
                            <span></span>
                          </li>
                          <li class="list-inline-item">
                            <span></span>
                          </li>
                          <li class="list-inline-item">
                            <span></span>
                          </li>
                          <li class="list-inline-item">
                            <span></span>
                          </li>
                        </ul> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#1AAFD0] rounded-lg">
                <FaPlus className="m-2 text-white text-2xl" />
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
