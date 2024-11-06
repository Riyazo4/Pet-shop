import React from "react";
import logo from "../../../assets/icons/pet-shop.png";
import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <header>
      <nav class="bg-white px-4 lg:px-6 py-3.5 mb-10">
        <div class="flex flex-wrap  mx-auto max-w-screen-xl justify-between items-center">
          <Link to="home" className="flex">
            <img src={logo} class="mr-4 h-4 sm:h-7" alt="Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap text-black">
              Mtm <span className="text-orange-400">Petshop</span>
            </span>
          </Link>

          <div
            class="hidden justify-between items-center w-full lg:flex lg:w-auto "
            id="mobile-menu-2"
          >
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link to="/admin" class="text-gray-70 hover:text-orange-400">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/admin/addProduct" class="text-gray-70 hover:text-orange-400">
                  Add Product
                </Link>
              </li>
              <li>
                <Link to="#" class="text-gray-70 hover:text-orange-400">
                  Add Careers
                </Link>
              </li>
              <li>
                <Link to="#" class="text-gray-70 hover:text-orange-400">
                  List Products
                </Link>
              </li>
              <li>
                <Link to="#" class="text-gray-70 hover:text-orange-400">
                  List Orders
                </Link>
              </li>
              <li>
                <Link to="#" class="text-gray-70 hover:text-orange-400">
                  List Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AdminNav;
