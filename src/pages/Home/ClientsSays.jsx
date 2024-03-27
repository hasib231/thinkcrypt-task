import React from 'react';
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const ClientsSays = () => {
    return (
      <div className="w-11/12 md:w-9/12 mx-auto">
        <div className="pt-12 mb-5">
          <h1 className="text-4xl font-bold">What our clients are saying</h1>
          <div className="bg-red-500 w-12 h-1 rounded-lg"></div>
        </div>

        <div className="flex justify-between mt-12">
          <div className="flex w-5/12">
            <div className="bg-red-500 h-28 w-2 me-2 my-auto"></div>
            <div>
              <div className="flex">
                <div className="text-red-500">
                  <RiDoubleQuotesL size={"18px"} />
                </div>
                <div>
                  <div className=" mx-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nis aliquip ex ea commodo consequat.
                    <span className="text-red-500">
                      <RiDoubleQuotesR size={"18px"} />
                    </span>
                    <h3 className="font-bold mt-5">Asif Istiaque</h3>
                    <p className="text-xs">THINK CORPORATION</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd part */}
          <div className="flex w-5/12">
            <div className="bg-red-500 h-28 w-2 me-2 my-auto"></div>
            <div>
              <div className="flex">
                <div className="text-red-500">
                  <RiDoubleQuotesL size={"18px"} />
                </div>
                <div>
                  <div className=" mx-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nis aliquip ex ea commodo consequat.
                    <span className="text-red-500">
                      <RiDoubleQuotesR size={"18px"} />
                    </span>
                    <h3 className="font-bold mt-5">Asif Istiaque</h3>
                    <p className="text-xs">THINK CORPORATION</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ClientsSays;