import { useEffect, useState } from "react";


export const newCategoryAdded = (userId, token, category) => {
    return fetch(`http://localhost:8000/api/category/create/${userId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(category),
    })
      .then((response) => response.json())
      .catch((err) => {
        console.log("Fetch error:", err);
      });
  };

  export const newSubCatAdded = (userId, token, subCategoryName, selectedCategory) => {
    return fetch(`http://localhost:8000/api/category/create_Sub_cat/${userId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name: subCategoryName, categoryId: selectedCategory }),
      })
      .then((response) => {
        if (!response.ok) {
          // If the response is not successful, throw an error to be caught later
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse JSON if the response is successful
      })
      .catch((err) => {
        console.error("Error in fetch:", err);
        return { error: "Server error. Please try again later." }; // Return a custom error object to handle it in handleSubCatCreate
      });
};
