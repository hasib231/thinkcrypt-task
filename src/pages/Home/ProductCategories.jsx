import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import chicken from "../../assets/Categories/chicken-svgrepo-com.png";
import cow from "../../assets/Categories/cow.png";
import sheep from "../../assets/Categories/sheep-looking-right-svgrepo-com 1.png";
import LearnMore from "../../components/LearnMore";

const ProductCategories = () => {
  return (
    <div className="w-11/12 md:w-9/12 mx-auto ">
      <div className="mt-28 mb-12">
        <h1 className="text-4xl font-bold">Product Categories</h1>
        <div className="bg-red-500 w-12 h-1 rounded-lg"></div>
      </div>

      <div className="md:flex md:justify-between">
        <div className="bg-[#F1F1F1] w-72 h-64 rounded-sm">
          <img className="mx-auto pt-14" src={chicken} alt="" />
          <button className="flex items-center border border-slate-300 px-3 py-2 mt-8 mx-auto">
            <div>
              <h1 className="font-bold">
                Shop <span className="text-red-500">Now</span>
              </h1>
            </div>
            <div className="text-red-500 ms-2 mt-1">
              <FaArrowRightLong />
            </div>
          </button>
        </div>

        <div className="bg-[#F1F1F1] w-72 h-64 rounded-sm">
          <img className="mx-auto pt-14" src={cow} alt="" />
          <button className="flex items-center border border-slate-300 px-3 py-2 mt-8 mx-auto">
            <div>
              <h1 className="font-bold">
                Shop <span className="text-red-500">Now</span>
              </h1>
            </div>
            <div className="text-red-500 ms-2 mt-1">
              <FaArrowRightLong />
            </div>
          </button>
        </div>

        <div className="bg-[#F1F1F1] w-72 h-64 rounded-sm">
          <img className="mx-auto pt-14" src={sheep} alt="" />
          <button className="flex items-center border border-slate-300 px-3 py-2 mt-8 mx-auto">
            <div>
              <h1 className="font-bold">
                Shop <span className="text-red-500">Now</span>
              </h1>
            </div>
            <div className="text-red-500 ms-2 mt-1">
              <FaArrowRightLong />
            </div>
          </button>
        </div>
      </div>

      <div className="flex justify-end">
        <LearnMore
          firstText={"Explore"}
          secondText={"All Categories"}
        ></LearnMore>
      </div>
    </div>
  );
};

export default ProductCategories;
