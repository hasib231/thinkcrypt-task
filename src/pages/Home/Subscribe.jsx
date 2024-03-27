import React from 'react';
import cow from "../../assets/Categories/cow.png";

const Subscribe = () => {
    return (
      <div className="bg-[#F5F5F5] py-20">
        <div className="w-11/12 md:w-9/12 mx-auto">
          <img className="mx-auto" src={cow} alt="" />
          <div className="flex justify-center my-10">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold">
                Subscribe to{" "}
                <span className="text-red-500">our Newsletter</span>
              </h1>
              <div className="bg-red-500 w-12 h-1 rounded-lg"></div>
            </div>
          </div>
          <p className="text-center md:text-2xl">
            Subscribe to our Newsletter and get exclusive updates,<br></br>{" "}
            amazing offers & discounts
          </p>
          <div className="flex justify-center mt-10">
            <input
              className="border py-2 ps-3 md:pe-48 rounded-l-md"
              type="text"
              placeholder="Enter your e-mail"
            />
            <button className="bg-[#424242] text-white py-2 px-4 md:px-8 rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    );
};

export default Subscribe;