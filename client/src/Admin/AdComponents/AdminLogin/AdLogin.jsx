import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/adminicons/adminImgs/ryan-miglinczy-02n9_v-d1yY-unsplash.jpg";
const AdLogin = () => {
  return (
    <section className=" min-h-fit  flex items-center justify-center mt-12">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl items-center">
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
          <p className="text-xs mt-4 text-[#002D74]">
            If you are already a member, easily log in
          </p>

          <form className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl border"
              type="email"
              name="email"
              placeholder="Email"
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>

            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
            >
              Login
            </button>
          </form>
        </div>

        <div className="md:block hidden w-1/2 ">
          <img className="rounded-2xl " src={logo} alt="Login" />
        </div>
      </div>
    </section>
  );
};

export default AdLogin;
