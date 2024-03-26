import React from 'react';
import cycle from "../../assets/CoreValues/cycle.png";

const OurProcurement = () => {
    return (
      <div className=" w-9/12 mx-auto ">
        <div className="my-12">
          <h1 className="text-4xl font-bold">Our Procurement Cycle</h1>
          <div className="bg-red-500 w-12 h-1 rounded-lg"></div>
        </div>

        <p className=''>
          We have also partnered with some other farms in order to meet our
          retailers, clients and customer’s demand. After a product is placed
          the livestocks are processed by professionals in our processing unit
          which is well maintained by another team responsible for maintaining
          the processing unit. After the processing is done, our Quality
          assurance team checks the quality of the product and it is then
          approved for packaging. At the end of the packaging process the
          products are handed over to our delivery persons under the supervision
          of our delivery fleet management team. The whole product is maintained
          in a cold chain for the best quality, fresh meat.
        </p>

        <img className='mx-auto my-12' src={cycle} alt="" />
      </div>
    );
};

export default OurProcurement;