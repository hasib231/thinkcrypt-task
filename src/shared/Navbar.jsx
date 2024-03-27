import React, { useEffect, useState } from 'react';
import dhaka from "../assets/Others/DHAKA.png";
import mohammadpur from "../assets/Others/MOHAMMADPUR.png";
import women from "../assets/Others/women.png";
import logo from "../assets/Others/logo.png";
import {
  IoMenu,
  IoLocationOutline,
  IoSearchSharp,
  IoCartOutline,
} from "react-icons/io5";

const Navbar = () => {
    const [isFirstSectionVisible, setIsFirstSectionVisible] = useState(true);

    useEffect(() => {
      const handleScroll = () => {
        const firstSection = document.getElementById("banner-section");
        // const secondSection = document.getElementById("second-section");
        const firstSectionHeight = firstSection.offsetHeight;

        if (window.scrollY <= firstSectionHeight) {
          setIsFirstSectionVisible(false);
        } else {
          setIsFirstSectionVisible(true);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    return (
      <div>
        {isFirstSectionVisible ? (
          <div className="navbar fixed z-10 bg-[#F1F1F1] text-black">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="">
                  <IoMenu size={"25px"} />
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow border bg-[#F1F1F1] z-10 rounded-box w-52"
                >
                  <li>
                    <a>Homepage</a>
                  </li>
                  <li>
                    <a>Product</a>
                  </li>
                  <li>
                    <a>About Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="navbar-center">
              <img src={logo} alt="" />
            </div>
            <div className="navbar-end">
              <button className="btn btn-ghost btn-circle">
                <IoSearchSharp size={"24px"} />
              </button>
              <button className="btn btn-ghost btn-circle">
                <IoCartOutline size={"24px"} />
              </button>
              <button className="btn btn-ghost btn-circle">
                <img src={women} alt="" />
              </button>
            </div>
          </div>
        ) : (
          <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
            <div className="flex-none">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="">
                  <IoMenu size={"25px"} />
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow shadow-white z-10 bg-opacity-30 bg-black text-white rounded-box w-52"
                >
                  <li>
                    <a>Homepage</a>
                  </li>
                  <li>
                    <a>Product</a>
                  </li>
                  <li>
                    <a>About Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex ">
                <div className="ms-5 me-2">
                  <IoLocationOutline size={"24px"} />
                </div>
                <div>
                  <img src={dhaka} alt="" />
                  <img className="mt-1" src={mohammadpur} alt="" />
                </div>
              </div>
            </div>
            <div className="flex-none">
              <button className="btn btn-ghost btn-circle">
                <IoSearchSharp size={"24px"} />
              </button>
              <button className="btn btn-ghost btn-circle">
                <IoCartOutline size={"24px"} />
              </button>
              <button className="btn btn-ghost btn-circle">
                <img src={women} alt="" />
              </button>
            </div>
          </div>
        )}
      </div>
    );
};

export default Navbar;