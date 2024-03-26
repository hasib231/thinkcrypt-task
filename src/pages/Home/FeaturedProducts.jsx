import React, { useEffect, useState } from "react";
import line from "../../assets/Others/line_design.png";
import cow from "../../assets/Categories/cow.png";
import Card from "../../components/Card";
import LearnMore from "../../components/LearnMore";

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch(
        "https://thinkcrypt-backend-404c5b8ec31f.herokuapp.com/api/v0/products"
      )
        .then((res) => res.json())
        .then((data) => {
            const limitedData = data.doc.slice(0, 4);
            setProducts(limitedData);
        });
    },[]);
  return (
    <div>
      <img className="w-full mt-12 mb-20" src={line} alt="" />

      <div className="w-11/12 md:w-9/12 mx-auto">
        {/*header part  */}
        <div>
          <img className="mx-auto" src={cow} alt="" />
          <div className="flex justify-center my-12">
            <div>
              <h1 className="text-4xl font-bold">
                Featured Products{" "}
                <span className="text-red-500">& Specials</span>
              </h1>
              <div className="bg-red-500 w-28 h-1 rounded-lg"></div>
            </div>
          </div>
          <p className="text-center">
            We conduct business with Ethics & Integrity. We are proud of the
            products which we manufacture and the efforts we put into them. Our
            R & D wing constantly put in great efforts to innovate in the field.
            Our goal is to serve on our country by setting standards of quality,
            services and commitment to customers.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-10 mt-12">
          {products.map((product) => (
            <Card key={product._id} product={product}></Card>
          ))}
        </div>

        <div className="flex justify-end">
          <LearnMore
            firstText={"Explore All"}
            secondText={"our products"}
          ></LearnMore>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
