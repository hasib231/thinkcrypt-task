import React from 'react';
import aci from "../../assets/Partners/aci.png"
import bangla from "../../assets/Partners/bangla.png"
import Ifarmer from "../../assets/Partners/Ifarmer.png"
import LearnMore from '../../components/LearnMore';

const Partners = () => {
    return (
      <div className="w-11/12 md:w-9/12 mx-auto mt-28">
        <div className="mb-5">
          <h1 className="text-4xl font-bold">Our Clients & Partners</h1>
          <div className="bg-red-500 w-12 h-1 rounded-lg"></div>
        </div>
        <p>
          LiveFresh is currently supplying the required quantity of the quality
          meat in ACI Limited and Banglacut as a trusted supplier. We are also
          partnered to provide the solution of the meat sector with iFarmer-a
          technology company that enables small scale farmers and Agri
          Businesses to maximize their profit. Apart from these large Agri
          Business companies, we are serving our product to the retailers and
          directly to the consumers. At the supply end we also partnered with
          more than 550 small and medium farmers who raise their product for us.
        </p>
        <div className="flex flex-col items-center md:flex-row md:justify-between mt-12">
          <img src={aci} alt="" />
          <img src={bangla} alt="" />
          <img src={Ifarmer} alt="" />
        </div>

        <div className="flex justify-end">
          <LearnMore firstText={"Explore"} secondText={"Details"}></LearnMore>
        </div>
      </div>
    );
};

export default Partners;