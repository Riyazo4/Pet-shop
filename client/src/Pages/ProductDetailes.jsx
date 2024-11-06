import React, { useState } from "react";

import fast from "../assets/icons/delivery-bike.3781f37b210e3187f35e.png";
import home from "../assets/icons/home-delivery.7524ad4c73e11c819c2f.png";
import caseon from "../assets/icons/cash-on-delivery.png";

import test from "../assets/8ce53529-21ab-44ea-8422-0259ceb700b4-1FriSyPl33ilsVe8kp_jcc-tyDm31DcFU.jpeg";

import { BsFillStarFill } from "react-icons/bs";
import ProductCard from "../components/Ui/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDetailes = () => {
  const [activeSection, setActiveSection] = useState("description");

  const [rating, setRating] = useState(0); // State to track the current rating

  // Function to handle star click
  const handleStarClick = (index) => {
    setRating(index + 1); // Set the rating based on the star clicked (index + 1)
  };

  const handlereviewsubmit = (event) => {
    event.preventDefault();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="mt-8">
      <div className="container mx-auto p-5">
        <div className="md:flex  justify-center mb-10">
          <div className="flex items-center ">
            <div className="">
              <div className=" border cursor-pointer  border-orange-500 p-1 rounded-lg mb-6">
                <img src={test} alt="" className="w-20" />
              </div>

              <div className=" border cursor-pointer  border-orange-500 p-1 rounded-lg mb-6">
                <img src={test} alt="" className="w-20" />
              </div>

              <div className=" border cursor-pointer  border-orange-500 p-1 rounded-lg mb-6">
                <img src={test} alt="" className="w-20" />
              </div>
            </div>

            <div className="">
              <img src={test} alt="" className="w-full h-80" />
            </div>
          </div>

          <div className="md:w-6/12 p-14">
            <div className="">
              <h1 className="text-black font-bold text-6xl mb-5">
                Product name
              </h1>

              <span>2000</span>

              <div className="mb-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dmnis
                  asperiores laudantium.
                </p>
              </div>

              <div class="flex flex-col space-y-4 mb-6">
                <div class="flex items-center space-x-2">
                  <span class="text-lg font-semibold text-black">
                    Pack Size
                  </span>
                  <span class="bg-orange-400 text-white text-sm px-3 py-1 rounded-full">
                    1.5 kg
                  </span>
                </div>

                <div class="flex items-center space-x-9">
                  <span class="text-lg font-semibold text-black">Quantity</span>
                  <div class="flex items-center border border-gray-300 rounded-md">
                    <button class="px-3 py-2 text-gray-700">-</button>

                    <span>10</span>

                    <button class="px-3 py-2 text-gray-700">+</button>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 items-center">
                <button className=" text-black bg-orange-300 p-2  rounded h-10 cursor-pointer border-none hover:bg-orange-500">
                  Add To Cart
                </button>
                <button className=" text-black bg-orange-300 p-2  rounded h-10 cursor-pointer border-none hover:bg-orange-500">
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <div className="grid md:grid-cols-3">
            <div
              className={`p-4 border border-gray-200 shadow-md rounded text-center cursor-pointer ${
                activeSection === "description" ? "bg-gray-100" : ""
              }`}
              onClick={() => setActiveSection("description")}
            >
              <h2 className="text-lg font-semibold">Description</h2>
            </div>
            <div
              className={`p-4 border border-gray-200 shadow-md rounded text-center cursor-pointer ${
                activeSection === "review" ? "bg-gray-100" : ""
              }`}
              onClick={() => setActiveSection("review")}
            >
              <h2 className="text-lg font-semibold">Review</h2>
            </div>
            <div
              className={`p-4 border border-gray-200 shadow-md rounded text-center cursor-pointer ${
                activeSection === "manufacture" ? "bg-gray-100" : ""
              }`}
              onClick={() => setActiveSection("manufacture")}
            >
              <h2 className="text-lg font-semibold">Manufacture Details</h2>
            </div>
          </div>

          <div className=" border border-orange-200 rounded-md shadow-2xl p-4 ">
            {activeSection === "description" && (
              <section>
                <div className="mt-4">
                  <p>
                    Make playtime extra tasty for your best friend with the JW
                    Pet Rockin Treat Ball. This ball rocks, rolls, and slides
                    while dispensing treats for hours of delicious fun. It
                    features a tough non-toxic nylon frame with openings that
                    can hold up to even the toughest of chewers...
                  </p>
                </div>

                <div className="mt-4">
                  <h2 className="font-bold text-lg">Key Features:</h2>
                  <ul className="list-disc list-inside ml-4 mt-2">
                    <li>Put a tasty twist on playtime.</li>
                    <li>
                      Playful learning activity toy, use as a toy or treat
                      dispenser for hours of fun.
                    </li>
                    <li>
                      Tough certified non-toxic frame and easy-to-carry design.
                    </li>
                    <li>Withstands tough chewers.</li>
                    <li>
                      Just fill with your pup’s favorite treats or kibble (sold
                      separately).
                    </li>
                  </ul>
                </div>

                <div className="mt-4">
                  <p className="text-sm text-gray-600">
                    Dimensions: 8.5x5.5x9 in / 22x14x23
                  </p>
                  <p className="text-sm text-gray-600">Product Weight: 1 lb</p>
                </div>
              </section>
            )}
            {activeSection === "review" && (
              <section className="p-5">
                <div className="grid md:grid-cols-4 gap-5 mb-5 ">
                  <div className="p-4 bg-gradient-to-r from-indigo-200 to-yellow-100 rounded border-none">
                    <p>name</p>
                    <div className="flex items-center gap-2 text-yellow-400">
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ut dolorem autem culpa aspernatur qui architecto
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-indigo-200 to-yellow-100 rounded border-none">
                    <p>name</p>
                    <div className="flex items-center gap-2 text-yellow-400">
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ut dolorem autem culpa aspernatur qui architecto
                    </p>
                  </div>{" "}
                  <div className="p-4 bg-gradient-to-r from-indigo-200 to-yellow-100 rounded border-none">
                    <p>name</p>
                    <div className="flex items-center gap-2 text-yellow-400">
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ut dolorem autem culpa aspernatur qui architecto
                    </p>
                  </div>{" "}
                  <div className="p-4 bg-gradient-to-r from-indigo-200 to-yellow-100 rounded border-none">
                    <p>name</p>
                    <div className="flex items-center gap-2 text-yellow-400">
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ut dolorem autem culpa aspernatur qui architecto
                    </p>
                  </div>{" "}
                  <div className="p-4 bg-gradient-to-r from-indigo-200 to-yellow-100 rounded border-none">
                    <p>name</p>
                    <div className="flex items-center gap-2 text-yellow-400">
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ut dolorem autem culpa aspernatur qui architecto
                    </p>
                  </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    Write Your Review
                  </h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        className="p-3 text-gray-700 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                        type="text"
                        placeholder="Enter your name"
                      />
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="p-3 text-gray-700 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <div className="flex items-center justify-center text-yellow-500 gap-2">
                      {[...Array(5)].map((_, index) => (
                        <button
                          key={index}
                          onClick={() => handleStarClick(index)}
                          className="focus:outline-none"
                        >
                          <BsFillStarFill
                            size={24}
                            className={
                              index < rating
                                ? "text-yellow-500"
                                : "text-gray-300"
                            }
                          />
                        </button>
                      ))}
                    </div>
                    <textarea
                      className="w-full p-3 text-gray-700 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Write your review"
                      rows="5"
                    ></textarea>
                    <button className="w-full py-3 bg-orange-500 text-white font-bold rounded-md shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">
                      Submit Review
                    </button>
                  </div>
                </div>
              </section>
            )}
            {activeSection === "manufacture" && (
              <section>
                <div>
                  <div className="flex items-center mb-3 gap-4">
                    <h2>coutry of orgin : </h2>
                    <p>india</p>
                  </div>
                  <div className="mb-3">
                    <h2>Name Address of Manufacturer: </h2>
                    <p>
                      Mars Petcare (Thailand) Co Ltd, 799, MOO4, Chantuk,
                      Pakchong, Nakhornratchasima, 301130, Thailand /\nMars
                      International, Mars International, Mars Magyarorsz?g
                      Kis?llateledel Gy?rt? Kft, 6648 Csongr?d-Bokros, l.
                      ker?let, Hungary /\nMars International India PVT. LTD.,
                      Mars International India Pvt Ltd , Survey No 2099-2103,
                      Village Wargal, Siddepet Highway , District Medak 502279 ,
                      Telangana
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <h2>Imported by :</h2>
                    <p>
                      MARS International India Pvt. Ltd.4658-A, No. 21, Ansari
                      Road, Darya Ganji,New Delhi,110002
                    </p>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>

        <section>
          <div className="">
            <h1 className="text-center text-3xl font-bold">
              suggested products
            </h1>
            <Slider {...settings}>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </Slider>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ProductDetailes;
