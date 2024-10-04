import React, { useState } from "react";
import { ImSpinner } from "react-icons/im";

import Banner from "../../assets/images/mane.png";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../../Firebase/FirebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Swal from "sweetalert2";

const AddProduct = () => {
  const [loading, setLoading] = useState(false);
  const [ProductImage, setProductImage] = useState("");
  const [ProductName, setProductName] = useState("");
  const [ProductDesc, setProductDesc] = useState("");
  const [ProductCategory, setProductCategory] = useState("");
  const [Price, Setprice] = useState("");
  const [Offer, setOffer] = useState("");
  const [Brand, setBrand] = useState("");

  const addProduct = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("ProductName", ProductName);
    formData.append("ProductDesc", ProductDesc);
    formData.append("ProductCategory", ProductCategory);
    formData.append("Price", Price);
    formData.append("Offer", Offer);
    formData.append("Brand", Brand);
    formData.append("ProductImage", ProductImage);

    try {
      const response = await axios.post("api", formData, {
        // headers: {
        //   ""
        // },
      });

      if (response.status === 201) {
        setLoading(false);
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Product added successfully.",
        });
      }
    } catch (error) {
      setLoading(false);
      console.error("Error adding product", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while adding the product.",
      });
    }
  };

  return (
    <section className="flex first-line:items-center h-screen  p-10  gap-11">
      {loading ? (
        <ImSpinner
          size={60}
          className="mx-auto animate-spin text-orange-600 text-4xl mt-[200px]"
        />
      ) : (
        <>
          <div className="hidden  flex-1 lg:flex w-1/2 ">
            <img src={Banner} className="w-full rounded-xl" alt="" />
          </div>

          <div className="w-1/2">
            <h2 className="text-3xl font-bold mb-6">Add Product detail's </h2>
            <form onSubmit={addProduct}>
              <div className="mb-3">
                <label
                  htmlFor="Product Name"
                  className="block text-gray-700 text-xl font-bold mb-2"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  className="w-full text-lg px-3 border font-bold rounded-lg focus:outline-none focus:ring focus:border-blue-300 h-10"
                  placeholder="Enter Product Name"
                  value={ProductName}
                  onChange={(e) => setProductName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="Product Name"
                  className="block text-gray-700 text-xl font-bold mb-2"
                >
                  Product short description
                </label>
                <input
                  type="text"
                  className="w-full text-lg px-3 border font-bold rounded-lg focus:outline-none focus:ring focus:border-blue-300 h-10"
                  placeholder="Enter Product short desciprtion"
                />
              </div>

              <div className="flex gap-7  items-center  mb-3">
                <div>
                  <label
                    htmlFor="Prise"
                    className="block text-gray-700 text-xl font-bold mb-4"
                  >
                    Prise
                  </label>
                  <input
                    type="number"
                    className="w-full text-lg px-3 border font-bold rounded-lg focus:outline-none focus:ring focus:border-blue-300 h-10"
                    placeholder="Enter Product Prize"
                    value={Price}
                    onChange={(e) => Setprice(e.target.value)}
                  />
                </div>

                <div>
                  <span className=" text-gray-700 text-xl font-bold ">
                    Category
                  </span>

                  <select
                    className="w-full mt-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 h-10 font-bold"
                    value={ProductCategory}
                    onChange={(e) => setProductCategory(e.target.value)}
                  >
                    <option className="text-2xl">Select Category</option>
                    <option className="text-2xl" value="Dog Foods">
                      Dog Foods
                    </option>
                    <option className="text-2xl" value="Cat Foods">
                      Cats Foods
                    </option>

                    <option className="text-2xl" value="Fish Foods">
                      Fish Foods
                    </option>
                    <option className="text-2xl" value="Pet Medicines">
                      Pet Medicines
                    </option>
                    <option
                      className="text-2xl"
                      value="Large animals Medicines"
                    >
                      Large animals medicines
                    </option>
                    <option className="text-2xl" value="Poultry Medicines">
                      Poultry medicines
                    </option>
                    <option className="text-2xl" value="Toys">
                      Toys
                    </option>
                    <option className="text-2xl" value="Cat Treats">
                      Cat Treats
                    </option>
                    <option className="text-2xl" value="Dog Treats">
                      Dog Treats
                    </option>
                    <option className="text-2xl" value="Grooming">
                      Grooming
                    </option>
                    <option className="text-2xl" value="Feeders">
                      Feeders
                    </option>
                    <option className="text-2xl" value="Cat Litters">
                      Cat Litters
                    </option>
                    <option className="text-2xl" value="Poultry Vaccines">
                      Poultry Vaccines
                    </option>
                    <option className="text-2xl" value="Pet Vaccines">
                      Pet Vaccines
                    </option>
                    <option className="text-2xl" value="Cages">
                      Cages
                    </option>
                    <option className="text-2xl" value="Fish Tanks">
                      Fish Tanks
                    </option>
                    <option className="text-2xl" value="Sugary">
                      Surgery
                    </option>
                  </select>
                </div>

                <div>
                  <span className=" text-gray-700 text-xl font-bold ">
                    Offers
                  </span>

                  <select className="w-full mt-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 h-10 font-bold">
                    <option className="text-2xl">Select Offers</option>
                    <option className="text-2xl" value="Meals">
                      10 %
                    </option>
                    <option className="text-2xl" value="Arabian Food">
                      20 %
                    </option>

                    <option className="text-2xl" value="Burger">
                      30 %
                    </option>
                    <option className="text-2xl" value="Juices">
                      40 %
                    </option>
                    <option className="text-2xl" value="Sandwiches">
                      50 %
                    </option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="manufacture-details"
                  className="block text-gray-700 text-xl font-semibold mb-2"
                >
                  Manufacture Details
                </label>
                <textarea
                  id="manufacture-details"
                  className="w-full p-3 text-lg text-gray-700 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out h-32 resize-none"
                  placeholder="Enter manufacture details"
                ></textarea>
              </div>

              <div className="">
                <span className=" block text-gray-700 text-2xl font-bold mb-2 ">
                  Image
                </span>
                <input
                  type="file"
                  className="font-medium "
                  onChange={(e) => setProductImage(e.target.files[0])}
                />
              </div>

              <button
                type="submit"
                className="bg-orange-400 hover:bg-orange-600  text-white px-4 text-2xl rounded-lg font-medium h-12 w-52 mt-5"
              >
                Submit
              </button>
            </form>
          </div>
        </>
      )}
    </section>
  );
};

export default AddProduct;
