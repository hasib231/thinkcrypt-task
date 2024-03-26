import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const LearnMore = ({firstText,secondText}) => {
    return (
      <div className="my-12 flex items-center">
        <div>
          <h1 className="font-bold">
            {firstText} <span className="text-red-500">{secondText}</span>
          </h1>
          <div className="bg-red-500 w-5 h-0.5 rounded-lg"></div>
        </div>
        <div className="text-red-500 ms-2 mt-1">
          <FaArrowRightLong />
        </div>
      </div>
    );
};

export default LearnMore;