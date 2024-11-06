import React from "react";

import test from "../assets/8ce53529-21ab-44ea-8422-0259ceb700b4-1FriSyPl33ilsVe8kp_jcc-tyDm31DcFU.jpeg";

import { MdArrowBackIosNew } from "react-icons/md";
import gp from "../assets/icons/google-pay.png";
import pt from "../assets/icons/Paytm-Logo.wine.svg";
import pn from "../assets/icons/PhonePe-Logo.wine.svg";
import ms from "../assets/icons/Amazon_Pay-Logo.wine.svg";
import bhim from "../assets/icons/bhim.svg";
import mc from "../assets/icons/Mastercard-Logo.wine.svg";
import vs from "../assets/icons/Visa_Inc.-Logo.wine.svg";

import CountryDrop from "../components/Ui/CountryDrop";

const Checkout = () => {
  return (
    <div className="container">
      <section className="mt-24">
        <h1 className="text-2xl font-bold mb-5">Fille the form</h1>
        <div className="grid md:grid-cols-2  sm:grid-cols-1">
          <div>
            <div>
              <form action="">
                <div className="flex gap-3 mb-5">
                  <input
                    type="text"
                    className="p-1  text-gray-500
                       bg-white border
                     rounded-md shadow-sm outline-none appearance-none
                    focus:border-orange-500
          font-bold"
                    placeholder="First Name"
                  />

                  <input
                    type="text"
                    className="p-1  text-gray-500
                       bg-white border
                     rounded-md shadow-sm outline-none appearance-none
                    focus:border-orange-500
          font-bold"
                    placeholder="Last Name"
                  />
                </div>

                <div className="mb-5">
                  <input
                    type="email"
                    className="p-1  text-gray-500
                       bg-white border
                     rounded-md shadow-sm outline-none appearance-none
                    focus:border-orange-500
          font-bold w-full"
                    placeholder="Email"
                  />
                </div>

                <div className="mb-5 w-full">
                  <input
                    type="number"
                    className="p-1  text-gray-500
                       bg-white border
                     rounded-md shadow-sm outline-none appearance-none
                    focus:border-orange-500
          font-bold w-full"
                    placeholder="Phone Number"
                  />
                </div>

                <div className="mb-5 w-full">
                  <input
                    type="number"
                    className="p-1  text-gray-500
                       bg-white border
                     rounded-md shadow-sm outline-none appearance-none
                    focus:border-orange-500
          font-bold w-full"
                    placeholder="Address"
                  />
                </div>

                <div className="mb-5 w-full">
                  <input
                    type="number"
                    className="p-1  text-gray-500
                       bg-white border
                     rounded-md shadow-sm outline-none appearance-none
                    focus:border-orange-500
          font-bold w-full"
                    placeholder="Land Mark"
                  />
                </div>

                <div className="flex justify-between ">
                  <input
                    type="text"
                    className="p-1 w-44 text-gray-500
                       bg-white border
                     rounded-md shadow-sm outline-none appearance-none
                    focus:border-orange-500
          font-bold"
                    placeholder="City"
                  />

                  <div>
                    <CountryDrop />
                  </div>

                  <input
                    type="text"
                    className="p-1  text-gray-500
                       bg-white border
                     rounded-md shadow-sm outline-none appearance-none
                    focus:border-orange-500
                     font-bold w-44"
                    placeholder="Pin code"
                  />
                </div>
              </form>
            </div>

            <div className="flex justify-between mt-10 mb-14">
              <div className="flex items-center cursor-pointer">
                <MdArrowBackIosNew />

                <p>Return</p>
              </div>

              <button className="bg-black shadow-xl hover:bg-black p-12 rounded-lg font-semibold hover.bg-indigo-600 py-3 text-sm text-white uppercase">
                Checkout
              </button>
            </div>

            <div className="cursor-pointer flex justify-between items-center">
              <div>
                <img className="w-16" src={gp} alt="" />
              </div>
              <div>
                <img className="w-16" src={pt} alt="" />
              </div>
              <div>
                <img className="w-16" src={pn} alt="" />
              </div>

              <div>
                <img className="w-16" src={ms} alt="" />
              </div>
              <div>
                <img className="w-16" src={bhim} alt="" />
              </div>
              <div>
                <img className="w-16" src={mc} alt="" />
              </div>
              <div>
                <img className="w-16" src={vs} alt="" />
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="flex items-center gap-10 mb-7">
                <div>
                  <img src={test} className="w-16" alt="" />
                </div>
                <p>Pedigree Dof Dood 1 Kg Puppy</p>

                <p>1290</p>
              </div>

              <div className="flex items-center gap-10 mb-7">
                <div>
                  <img src={test} className="w-16" alt="" />
                </div>
                <p>Pedigree Dof Dood 1 Kg Puppy</p>

                <p>1290</p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-5">
                <p>SubTotal</p>
                <p>2500</p>
              </div>
              <hr className="mb-6" />
              <div className="flex items-center justify-between">
                <p>total</p>
                <p>59800</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
