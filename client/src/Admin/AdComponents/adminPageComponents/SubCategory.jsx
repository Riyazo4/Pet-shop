import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../../../auth/index";
import { newSubCatAdded } from "../../adminAPI/CategoryAPI";
import Swal from "sweetalert2";

export const NewSub_CategoryForm = () => {
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subCategoryName, setSubCategoryName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const { user, token } = isAuthenticated();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/categories`);
        const data = await response.json();
        console.log("Fetched categories:", data);

        setCategories(data.categories || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError("Failed to load categories.");
      }
    };

    fetchCategories();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setSubCategoryName("");
    setSelectedCategory("");
    setSuccess(false);
    setError(null);
  };

  const handleSubCatCreate = async (e) => {
    e.preventDefault();
    console.log("-------------  sub category  ------------------",subCategoryName );
    console.log("------------- Main category  ------------------",selectedCategory );
    

    newSubCatAdded(user._id, token, subCategoryName, selectedCategory )
      .then((data) => {
        console.log("-------   data -------------", data);
        
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
            text: "Sub-category added successfully.",
          });
          setSuccess(true);
          closeModal();
        }
      })
      .catch((err) => {
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
      <h4 className="text-lg font-semibold mb-6">
                    If you want to add a new Sub-Category, please add it from here.
                </h4>
      <button onClick={openModal} className="bg-orange-400 hover:bg-orange-600 text-white px-2 text-2xl rounded-lg font-medium h-10 mb-10">
        Add Sub-Category
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
              Add New Sub-Category
            </h2>

            <form onSubmit={handleSubCatCreate}>
              <div className="mt-4">
                <label className="text-muted">
                  Main Category:
                  <select
                    className="ms-5"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    required
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="mt-4">
                <label className="text-muted">Sub-Category Name</label>
                <input
                  type="text"
                  onChange={(e) => setSubCategoryName(e.target.value)}
                  value={subCategoryName}
                  required
                  className="p-2 border border-gray-300 rounded-md text-gray-700 focus:border-orange-500 focus:outline-none"
                />
              </div>

              <button type="submit" className="mt-3 btn btn-success">
                Create Sub-Category
              </button>

              {success && <h4 className="text-success">Sub-Category created successfully!</h4>}
              {error && <h4 className="text-danger">{error}</h4>}
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
