import React from "react";
import grass from "../../assets/CoreValues/grass.png";
import quality from "../../assets/CoreValues/quality.png";
import fresh from "../../assets/CoreValues/fresh.png";
import LearnMore from "../../components/LearnMore";

const OurCoreValues = () => {
  return (
    <div className="w-11/12 md:w-8/12 mx-auto">
      <div className="my-12">
        <h1 className="text-4xl font-bold">Our Core Values</h1>
        <div className="bg-red-500 w-12 h-1 rounded-lg"></div>
      </div>

      <div className="md:flex ">
        {/* first part */}
        <div>
          <img className="h-14 w-20" src={grass} alt="" />
          <div className="my-3">
            <h1 className="font-bold">
              Grass <span className="text-red-500">fed</span>
            </h1>
            <div className="bg-red-500 w-5 h-0.5 rounded-lg"></div>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugiat
            numquam quod enim distinctio quas blanditiis at perferendis ipsa
            voluptas.
          </p>
        </div>

        <div className="bg-red-500 w-px h-20 mx-20 hidden md:block"></div>

        {/* second part */}
        <div className="my-12 md:my-0">
          <img className="h-14 w-20" src={quality} alt="" />
          <div className="my-3">
            <h1 className="font-bold">
              Grass <span className="text-red-500">fed</span>
            </h1>
            <div className="bg-red-500 w-5 h-0.5 rounded-lg"></div>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugiat
            numquam quod enim distinctio quas blanditiis at perferendis ipsa
            voluptas.
          </p>
        </div>

        <div className="bg-red-500 w-px h-20 mx-20 hidden md:block"></div>

        {/* third part */}
        <div>
          <img className="h-14 w-16" src={fresh} alt="" />
          <div className="my-3">
            <h1 className="font-bold">
              Grass <span className="text-red-500">fed</span>
            </h1>
            <div className="bg-red-500 w-5 h-0.5 rounded-lg"></div>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugiat
            numquam quod enim distinctio quas blanditiis at perferendis ipsa
            voluptas.
          </p>
        </div>
      </div>

      <div className="flex justify-end">
        <LearnMore
          firstText={"Learn More"}
          secondText={"about our values"}
        ></LearnMore>
      </div>
    </div>
  );
};

export default OurCoreValues;
