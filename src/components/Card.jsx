import React from 'react';
import cardImg from "../assets/Others/cardImg.png";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const Card = ({ product }) => {
    const { name, price } = product;
    return (
      <div className="w-[244px]  border rounded-sm">
        <img className='rounded-t-sm' src={cardImg} alt="" />
        <p className="font-bold my-6 text-center px-3">
          {name}
        </p>
        <div className="flex mb-6 justify-center">
          <TbCurrencyTaka size={"30px"} />
                <p className="text-2xl font-bold">{ price}/kg</p>
        </div>
        <div className="flex">
          <button className="flex items-center bg-[#424242] text-white py-2 px-5 w-6/12">
            <FaPlus size={"10px"} /> <span className="text-xs mx-4">1 kg</span>{" "}
            <FaMinus size={"10px"} />
          </button>
          <button className="flex items-center bg-red-500 text-white py-2 px-3 w-6/12">
            <MdOutlineShoppingCart size={"14px"} />
            <span className=" ms-2 text-xs">ADD TO CART</span>
          </button>
        </div>
      </div>
    );
};

export default Card;