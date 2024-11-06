import React, { useEffect, useState } from "react";
import {
  BsListUl,
  BsPersonBoundingBox,
  BsPersonFillAdd,
  BsFillCartCheckFill,
} from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { AiOutlineMenu, AiOutlineLogin } from "react-icons/ai";
import logo from "../../assets/icons/pet-shop.png";
import { Link } from "react-router-dom";
import { SiGnuprivacyguard } from "react-icons/si";
import { FaHireAHelper } from "react-icons/fa";
import { LiaBusinessTimeSolid } from "react-icons/lia";

const Header = () => {
  const [openDrop, setOpenDrop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleOpen = () => {
    setOpenDrop(!openDrop);
  };

  const closeDropDown = () => {
    setOpenDrop(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-10 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <nav className="bg-white px-4 lg:px-6 py-3.5 ">
        <div className="flex flex-wrap  mx-auto max-w-screen-xl justify-between items-center">
          <Link to="home" className="flex">
            <img src={logo} className="mr-4 h-4 sm:h-7" alt="Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-black">
              Mtm <span className="text-orange-400">Petshop</span>
            </span>
          </Link>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto "
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link to="#" className="text-gray-70 hover:text-orange-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="shop" className="text-gray-70 hover:text-orange-400">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="cart" className="text-gray-70 hover:text-orange-400">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex gap-3 items-center hidden sm:flex">
            <Link to="watchList">
              <span className="cursor-pointer">
                <FiHeart className="text-red-500" size={22} />
              </span>
            </Link>

            <div
              className="bg-orange-300 w-32 rounded-xl"
              onClick={closeDropDown}
            >
              <div className="justify-center items-center text-black gap-3 flex">
                <div>
                  <BsFillCartCheckFill size={22} />
                </div>

                <span className="block">
                  <hr />
                </span>

                <div>
                  <p>2 items</p>
                  Rs 96
                </div>
              </div>
            </div>

            <div
              onClick={handleOpen}
              className="w-16 h-10 border border-gray-600 rounded-xl cursor-pointer hover:shadow-2xl relative"
            >
              <div className="flex justify-between m-2">
                <span>
                  <BsPersonFillAdd size={20} />
                </span>

                <span>
                  <AiOutlineMenu size={20} />
                </span>
              </div>
              {openDrop && (
                <div
                  className="absolute   right-0 mt-3 w-52  bg-white border border-gray-300 rounded-lg shadow-md p-3
                leading-10"
                >
                  <ul>
                    <Link to="signup">
                      <li className="flex items-center justify-between">
                        Signup <SiGnuprivacyguard className="ml-1" />
                      </li>
                    </Link>
                    <Link to="login">
                      <li className="flex items-center justify-between">
                        Login <AiOutlineLogin className="ml-1" />
                      </li>
                    </Link>
                    <hr />

                    <Link to="admin">
                      <li className="flex items-center justify-between">
                        Admin <LiaBusinessTimeSolid className="ml-1" />
                      </li>
                    </Link>

                    <Link to="help">
                      <li className="flex items-center justify-between">
                        Help <FaHireAHelper className="ml-1" />
                      </li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
