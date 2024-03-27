import React from 'react';
import { IoCheckmarkSharp } from "react-icons/io5";
import { MdOutlineQuestionMark } from "react-icons/md";
import LearnMore from '../../components/LearnMore';
const HowWeDiff = () => {
    return (
      <div className="w-11/12 md:w-9/12 mx-auto">
        <div className="pt-12 mb-12">
          <h1 className="text-4xl font-bold">How Are We Different</h1>
          <div className="bg-red-500 w-12 h-1 rounded-lg"></div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th className="font-bold md:text-2xl">
                  <span className="text-black">LIVE </span>
                  <span className="text-red-500">FRESH</span>
                </th>
                <th className="font-bold md:text-2xl">
                  <span className="text-black">Grocery </span>
                  <span className="text-red-500">Store</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td className="font-semi-bold md:text-xl">
                  <span className="text-black">Humanely & </span>
                  <br />
                  <span className="text-red-500">Sustainably Raised</span>
                </td>
                <td>
                  <IoCheckmarkSharp size={"35px"} />
                </td>
                <td className="text-red-500">
                  <MdOutlineQuestionMark size={"35px"} />
                </td>
              </tr>

              {/* row 2 */}
              <tr>
                <td className="font-semi-bold md:text-xl">
                  <span className="text-black">Conviniently Delivered</span>
                  <br />
                  <span className="text-red-500">to your home</span>
                </td>
                <td>
                  <IoCheckmarkSharp size={"35px"} />
                </td>
                <td className="text-red-500">
                  <MdOutlineQuestionMark size={"35px"} />
                </td>
              </tr>

              {/* row 3 */}
              <tr>
                <td className="font-semi-bold md:text-xl">
                  <span className="text-black">No Antibiotics or</span>
                  <br />
                  <span className="text-red-500">Hormones</span>
                </td>
                <td>
                  <IoCheckmarkSharp size={"35px"} />
                </td>
                <td className="text-red-500">
                  <MdOutlineQuestionMark size={"35px"} />
                </td>
              </tr>

              {/* row 4 */}
              <tr>
                <td className="font-semi-bold md:text-xl">
                  <span className="text-black">No Added salts</span>
                  <br />
                  <span className="text-red-500">or Chemicals</span>
                </td>
                <td>
                  <IoCheckmarkSharp size={"35px"} />
                </td>
                <td className="text-red-500">
                  <MdOutlineQuestionMark size={"35px"} />
                </td>
              </tr>

              {/* row 5 */}
              <tr>
                <td className="font-semi-bold md:text-xl">
                  <span className="text-black">Zero Mechanical</span>
                  <br />
                  <span className="text-red-500">Tenderizing</span>
                </td>
                <td>
                  <IoCheckmarkSharp size={"35px"} />
                </td>
                <td className="text-red-500">
                  <MdOutlineQuestionMark size={"35px"} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-end">
          <LearnMore firstText={"Explore"} secondText={"Details"}></LearnMore>
        </div>
      </div>
    );
};

export default HowWeDiff;