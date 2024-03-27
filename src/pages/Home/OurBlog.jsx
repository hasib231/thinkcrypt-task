import React from "react";
import LearnMore from "../../components/LearnMore";
import pic1 from "../../assets/OurBlog/Frame 224.png";
import pic2 from "../../assets/OurBlog/Frame 225.png";
import pic3 from "../../assets/OurBlog/Frame 226.png";
import pic4 from "../../assets/OurBlog/Frame 227.png";
import pic5 from "../../assets/OurBlog/Frame 228.png";

const OurBlog = () => {
  return (
    <div className="w-11/12 md:w-9/12 mx-auto">
      <div className="pt-12 mb-5">
        <h1 className="text-4xl font-bold">
          Our <span className="text-red-500">Blog</span>
        </h1>
        <div className="bg-red-500 w-12 h-1 rounded-lg"></div>
      </div>

      <div className="flex">
        <div className="me-28">
          <h1 className="font-bold text-3xl mt-8">
            12 Types of Steak & How to Cook Them
          </h1>
          <p className="text-sm mt-5 mb-5">
            There’s nothing better than a steak dinner, but understanding the
            many different types of steak can be confusing! Knowing how to
            choose the best steak cuts by tenderness, flavor and price is all
            part of preparation. From porterhouse....
          </p>
          <div className="flex justify-end">
            <LearnMore
              firstText={"Continue"}
              secondText={"Reading"}
            ></LearnMore>
          </div>
        </div>
        <img src={pic1} alt="" />
      </div>

      {/* second part */}
      <div className="mt-12 flex justify-between">
        {/* card 1 */}
        <div className="w-64">
          <img src={pic2} alt="" />
          <h2 className="font-bold text-xl my-5">Sous Vide Round Steak</h2>
          <p className="text-sm">
            Weighing under three pounds, the tri-tip is tender, delicious and
            easy to prepare.
          </p>
          <div className="flex justify-end">
            <LearnMore
              firstText={"Continue"}
              secondText={"Reading"}
            ></LearnMore>
          </div>
        </div>

        {/*card 2*/}
        <div className="w-64">
          <img src={pic3} alt="" />
          <h2 className="font-bold text-xl my-5">Spicy St. Louis Barbeque</h2>
          <p className="text-sm">
            Weighing under three pounds, the tri-tip is tender, delicious and
            easy to prepare.
          </p>
          <div className="flex justify-end">
            <LearnMore
              firstText={"Continue"}
              secondText={"Reading"}
            ></LearnMore>
          </div>
        </div>

        {/* card 3 */}
        <div className="w-64">
          <img src={pic4} alt="" />
          <h2 className="font-bold text-xl my-5">Grilled Tri-Tip Steak</h2>
          <p className="text-sm">
            Weighing under three pounds, the tri-tip is tender, delicious and
            easy to prepare.
          </p>
          <div className="flex justify-end">
            <LearnMore
              firstText={"Continue"}
              secondText={"Reading"}
            ></LearnMore>
          </div>
        </div>

        {/* card 4 */}
        <div className="w-64">
          <img src={pic5} alt="" />
          <h2 className="font-bold text-xl my-5">Grilled Flat Iron Steak</h2>
          <p className="text-sm">
            Weighing under three pounds, the tri-tip is tender, delicious and
            easy to prepare.
          </p>
          <div className="flex justify-end">
            <LearnMore
              firstText={"Continue"}
              secondText={"Reading"}
            ></LearnMore>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <LearnMore firstText={"Explore"} secondText={"Details"}></LearnMore>
      </div>
    </div>
  );
};

export default OurBlog;
