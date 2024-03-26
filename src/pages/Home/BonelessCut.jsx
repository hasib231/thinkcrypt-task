import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Card from "../../components/Card";

const BonelessCut = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://thinkcrypt-backend-404c5b8ec31f.herokuapp.com/api/v0/products"
    )
      .then((res) => res.json())
      .then((data) => {
        const limitedData = data.doc;
        setProducts(limitedData);
      });
  }, []);
  return (
    <div className="w-11/12 md:w-9/12 mx-auto">
      <div className="my-12">
        <h1 className="text-4xl font-bold">
          Boneless <span className="text-red-500">Cuts</span>
        </h1>
        <div className="bg-red-500 w-12 h-1 rounded-lg"></div>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        //   pagination={{
        //     clickable: true,
        //   }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        {products
          .filter((product) => product.category == "sides")
          .map((product) => (
            <SwiperSlide>
              <Card key={product._id} product={product}></Card>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default BonelessCut;
