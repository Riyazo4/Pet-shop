import React from "react";
import test from "../../assets/8ce53529-21ab-44ea-8422-0259ceb700b4-1FriSyPl33ilsVe8kp_jcc-tyDm31DcFU.jpeg";

const Likecard = () => {
  return (
    <div>
      <div class="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-2xl">
        <a
          class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
          href="#"
        >
          <img class="object-cover" src={test} alt="product image" />
          <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            39% OFF
          </span>
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-xl tracking-tight text-slate-900">dog food</h5>
          </a>
          <div class="mb-2 flex items-center gap-1">
            <p>
              <span class="text-3xl font-bold text-slate-900">$449</span>
              <span class="text-sm text-slate-900 line-through">$699</span>
            </p>
          </div>

          <div className="flex justify-between">
            <button className="bg-blue-400 font-medium   w-20 p-1 rounded hover:bg-blue-500">
              Add to cart
            </button>
            <button className="bg-red-600 font-medium  w-20 p-1 rounded hover:bg-red-500">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Likecard;
