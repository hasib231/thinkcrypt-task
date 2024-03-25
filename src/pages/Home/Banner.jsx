import React from "react";
import bannerImg from "../../assets/banner/banner_img.png";
import bannerText1 from "../../assets/banner/banner_text1.png";
import phoneNo from "../../assets/banner/phoneNo.png";
import bannerText2 from "../../assets/banner/banner_text2.png";
import shopNow from "../../assets/banner/SHOP_NOW.png";
import bannerText3 from "../../assets/banner/banner_text3.png";

const Banner = () => {
  return (
    <div
      className="hero lg:min-h-screen "
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "100% 100%",
      }}
    >
      <div className="w-full h-full flex justify-center items-center backdrop-brightness-50"></div>
      <div className="hero-content w-full h-full flex justify-start">
        <div className=" flex flex-col items-center lg:items-start h-full">
          <img className="lg:mt-40" src={bannerText1} alt="" />
          <img className="-mt-16 ms-16" src={phoneNo} alt="" />
          <img className="w-10/12 mt-4 mb-5 " src={bannerText2} alt="" />
          <button className="bg-white py-3 px-8 rounded-3xl mb-5">
            <img src={shopNow} alt="" />
          </button>
          <img className="mt-auto" src={bannerText3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
