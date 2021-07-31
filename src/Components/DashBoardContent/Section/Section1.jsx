import React from "react";
import { SmallSection1 } from "../SmallSection/SmallSection1";
import { SmallSection2 } from "../SmallSection/SmallSection2";
import { Section2 } from "./Section2";
import { SmollSection } from "./SmollSection";

export const Section1 = () => {
  return (
    <>
      <div className="mr-1">
        <h4 className="font-bold text-xl mb-3">Sales Charts</h4>
        <div className="bg-white py-3 px-2 rounded-md">
          <div className="flex justify-around items-center">
            <div className="text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <h4 className="font-semibold text-2xl">$345678</h4>
            <div className="flex">
              <div className="text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h4 className="font-medium text-green-300">8.31</h4>
            </div>
            <div>
              <select
                className="border-2 px-3 py-1 focus:border-green-300"
                name=""
                id=""
              >
                <option value="">January</option>
                <option value="">January</option>
                <option value="">January</option>
                <option value="">January</option>
              </select>
            </div>
          </div>
          <div className="mt-10">
            <img
              className="w-full h-60"
              src="https://picsum.photos/200/200"
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <h4 className="font-bold text-xl mb-3">Channels</h4>
        <div className="bg-white py-3 px-2 rounded-md">
            <div className="flex flex-wrap justify-center">
            <img src="https://picsum.photos/200/200" alt="" />
            </div>
            <div>
                <SmollSection items={[34,45,67]}/>
            </div>
            <div>
                <SmallSection1 items={[34,45,67]}/>
            </div>
            <div>
                <SmallSection2 items={["Male","Female","Child"]}/>
            </div>
        </div>
      
      </div>
      
    </>
  );
};
