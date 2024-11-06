import React from "react";
import CommonSection from "../components/Ui/CommonSection";
import ProductCard from "../components/Ui/ProductCard";

const Shop = () => {
  return (
    <section className="">
      <div className="mt-28">
        <CommonSection />
      </div>
      <div
        className="px-[30px] py-4 max-w-[1170px] 
      mx-auto flex flex-col lg:flex-row justify-between
      gap-4 lg:gap-x-3 relative lg:top-4 lg:shadow-1 bg-white 
      lg:bg-transparent lg:backdrop-blur rounded-lg -mt-36 mb-24"
      >
        <div>
          <input
            type="text"
            placeholder="Search Foods"
            className="p-2.5 w-full text-gray-500
          bg-white border
          rounded-md shadow-sm outline-none appearance-none
          focus:border-orange-500
          font-bold"
          />
        </div>

        <div className="relative w-full lg:max-w-sm">
          <select
            className="w-full p-2.5 text-gray-500
          bg-white border
          rounded-md shadow-sm outline-none appearance-none
          focus:border-orange-400"
          >
            <option>Filter By Category</option>
            <option value="Burger">Burger</option>
            <option value="Pizzas">Pizzas</option>
            <option value="Arabian Food">Arabian Foods</option>
          </select>
        </div>

        <div className="relative w-full lg:max-w-sm">
          <select
            className="w-full p-2.5 text-gray-500
          bg-white border
          rounded-md shadow-sm outline-none appearance-none
          focus:border-orange-400"
          >
            <option>ReactJS Dropdown</option>
            <option>Laravel 9 with React</option>
            <option>React with Tailwind CSS</option>
            <option>React With Headless UI</option>
          </select>
        </div>
      </div>

      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 ">
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
        </div>
      </div>
    </section>
  );
};

export default Shop;
