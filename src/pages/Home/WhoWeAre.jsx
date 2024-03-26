import React from 'react';
import whoWeAre from "../../assets/CoreValues/whoWeAre.png";
import LearnMore from '../../components/LearnMore';
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const WhoWeAre = () => {
    return (
      <div className="mt-28 md:flex">
        <img className="hidden md:block" src={whoWeAre} alt="" />
        <div className="w-11/12 md:w-5/12 mx-auto">
          <div className="mt-20 mb-12">
            <h1 className="text-4xl font-bold">Who We are</h1>
            <div className="bg-red-500 w-12 h-1 rounded-lg"></div>
          </div>

          <div className="flex">
            <div className="text-red-500">
              <RiDoubleQuotesL size={"25px"} />
            </div>
            <div>
              <p className="font-semibold mx-2">
                LiveFresh Agro provides a turnkey solution for meat and meat
                product from production by processing to ready to eat and hence
                “Farm to Fork”.
                <span className="text-red-500">
                  <RiDoubleQuotesR size={"25px"} />           
                </span>
              </p>

              <p className="mt-12 mx-2">
                The core focus for LiveFresh Agro is to create value for our
                stakeholders i.e. small and medium holding farmers, contract
                farmers sustainably by bring the market to resources. We have
                extensive experience in working with other agri-business players
                across the value chain and have developed rich experience in
                tackling various issues facing the industry currently from
                production to processing and retailing. Our expertise in
                tackling issues related to growth strategies, sustainability and
                operational efficiency has made us suitably positioned to
                deliver tangible value to our clients in dealing with cost
                pressures, partnering, sourcing and delivery capabilities &
                improving Food & Agribusinesses.{" "}
              </p>
            </div>
          </div>

          <div className="flex justify-end">
            <LearnMore
              firstText={"Learn More"}
              secondText={"about us"}
            ></LearnMore>
          </div>
        </div>
      </div>
    );
};

export default WhoWeAre;