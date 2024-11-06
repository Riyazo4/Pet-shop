import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../../../auth";
import { newCategoryAdded } from "../../adminAPI/CategoryAPI";
import Swal from "sweetalert2";

export const NewCategoryForm = () => {
    const [mainCat, setMainCat] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [catName, setCatName] = useState(""); // Category name input state
    const { user, token } = isAuthenticated();

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // useEffect(() => {
    //     const fetchCategories = async () => {
    //         try {
    //             const response = await fetch("http://localhost:8000/api/categories"); // Replace with actual endpoint
    //             const data = await response.json();
    //             console.log("///////////////////////", data);
                
    //             setMainCat(data); // Set the fetched categories to the state
    //         } catch (error) {
    //             console.error("Error fetching categories", error);
    //         }
    //     };
    //     fetchCategories();
    // }, []);

    const addCategory = (event) => {
        event.preventDefault();
        console.log("-------------------Category:-----------", catName);

        newCategoryAdded(user._id, token, { catName }).then((data) => {
            console.log("Response:", data);

            if (data.error) {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: data.error,
                });
            } else {
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "Category added successfully.",
                });
                closeModal();
                setCatName("");
            }
        }).catch(err => {
            console.error("Error adding category", err);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "An error occurred while adding the category.",
            });
        });
    };

    return (
        <div>
            <div className="mb-10">
                
                <label className="text-muted">
                    Main Category:
                    {/* <select
                        className="ms-5"
                        value={catName} // Use the state variable
                        onChange={(e) => setCatName(e.target.value)} // Set the selected category
                        required
                    >
                        <option value="">Select a category</option>
                        {mainCat.map((category) => (
                            <option key={category._id} value={category._id}>
                                {category.name}
                            </option>
                        ))}
                    </select> */}
                </label>
                <h4 className="text-lg font-semibold mb-6">
                    If you want to add a new Category, please add it from here.
                </h4>
                <button
                    onClick={openModal}
                    className="bg-orange-400 hover:bg-orange-600 text-white px-2 text-2xl rounded-lg font-medium h-10"
                >
                    New Category
                </button>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
                            Add New Category
                        </h2>
                        <form onSubmit={addCategory}>
                            <div className="container mb-10">
                                <div className="grid md:grid-cols-2">
                                    <div>
                                        <label className="text-gray-600 font-medium">
                                            Add Category
                                        </label>
                                        <input
                                            className="p-2 border border-gray-300 rounded-md text-gray-700 focus:border-orange-500 focus:outline-none"
                                            type="text"
                                            placeholder="Enter category"
                                            onChange={(e) => setCatName(e.target.value)}
                                            value={catName}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-500"
                            >
                                Submit
                            </button>
                        </form>
                        <div className="flex justify-end gap-4 mt-6">
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
