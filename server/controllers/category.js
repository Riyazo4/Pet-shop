import {Category, Subcategory} from "../models/category.js";
import { errorHandler } from "../helpers/dbErrorHandler.js";

import mongoose from "mongoose";

export const create = async (req, res) => {
  try {
    console.log("req.body:", req.body); // Log the entire request body

    const { catName } = req.body; // Extract catName from request body

    if (!catName) {
      return res.status(400).json({ error: "Category name is required" });
    }

    // Check if the category already exists
    const existingCategory = await Category.findOne({ name: catName });
    if (existingCategory) {
      return res.status(400).json({ error: "Category already exists" });
    }

    // Create a new category
    const newCategory = new Category({ name: catName });
    await newCategory.save();

    // Respond with the created category
    res.status(201).json({
      message: "Category created successfully",
      data: newCategory,
    });
  } catch (error) {
    console.error("Error creating category:", error); // Log the error for debugging
    res.status(400).json({
      error: errorHandler(error), // Use your error handling function
    });
  }
};

export const categoryById = async (req, res, next, id) => {
  try {
    const category = await Category.findById(id);
    if (!category) {
      return res.status(400).json({ error: "That Category is not found" });
    }
    req.category = category;
    next();
  } catch (error) {
    console.error("Error in Category Id", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

export const read_Category = (req, res) => {
  return res.json(req.category);
};

export const update_cat = async (req, res) => {
  try {
    const category = req.category;
    console.log(category);
    if (!category) {
      return res.status(404).json({
        error: "Category not found",
      });
    }
    (category.name = req.body.name),
      console.log("----------------------------------", category.name);
    const updated_category = await category.save();
    if (!updated_category) {
      return res.status(400).json({
        error: "Invalid Data",
      });
    }
    console.log("**********************************", updated_category);
    res.json({
      message: "Category updated successfully",
      category: updated_category,
    });
  } catch (error) {
    console.log("error*********************", error);
    res.status(400).json({
      error: errorHandler(error),
    });
  }
};

export const del_cat = async (req, res) => {
  try {
    const category = req.category;
    const del_Category = await category.deleteOne();
    if (!del_Category) {
      return res.status(400).json({
        error: errorHandler(erroor),
      });
    }

    res.json({ message: "Product successfuly deleted" });
  } catch (error) {
    res.status(400).json({
      error: errorHandler(err),
    });
  }
};

export const cat_List = async (req, res) => {
  try {
    console.log("Fetching category list");
    const categories = await Category.find();
    if (!categories) {
      return res.status(400).json({
        error: "No categories found",
      });
    }
    res.json({
      categories,
    });
  } catch (error) {
    res.status(400).json({
      error: errorHandler(error),
    });
  }
};




export const create_Sub_cat = async (req, res) => {
  const { name, categoryId } = req.body;

  // Validate categoryId
  if (!mongoose.Types.ObjectId.isValid(categoryId)) {
    return res.status(400).json({ error: "Invalid category ID" });
  }

  try {
    // Create new subcategory document
    const subcategory = new Subcategory({ name, category: categoryId });

    // Save subcategory to the database
    const savedSubcategory = await subcategory.save();

    // Add reference of this subcategory to the parent category
    await Category.findByIdAndUpdate(categoryId, {
      $push: { subcategories: savedSubcategory._id }
    });

    res.status(201).json({
      message: "Subcategory created successfully",
      subcategory: savedSubcategory
    });
  } catch (error) {
    console.error("Subcategory creation error:", error);
    if (error.name === "ValidationError") {
      return res.status(400).json({
        error: "Validation error",
        details: error.errors
      });
    }
    res.status(500).json({ error: "Server error" });
  }
};

export const sub_CategoryById = async (req, res, next, id) => {
    try {
        const sub_Category = await Sub_Category.findById(id)
        if(!sub_Category){
            return res.status(400).json({ error: 'That Category is not found' });
        }
        req.sub_category =  sub_Category
        next()
        
    } catch (error) {
        console.error('Error in Category Id', error);
        return res.status(500).json({ error: 'Something went wrong' });
  
        
    }
};

export const read_Sub_Category = (req, res)=>{
    return res.json(req.sub_category)
}

export const update_Sub_cat = async (req, res) => {
  try {
       console.log("update sub category");
    const sub_Categories = req.sub_category;
    console.log(sub_Categories);
    if (!sub_Categories) {
      return res.status(404).json({
        error: "Sub-category not found",
      });
    }

    sub_Categories.name = req.body.name;
    sub_Categories.category = req.body.category

    
    const updated_category = await sub_Categories.save();
    if (!updated_category) {
      
      return res.status(400).json({
        error: "Invalid data or failed to update",
      });
    }

    res.json({
      message: "Sub-category updated successfully",
      category: updated_category,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: errorHandler(error),
    });
  }
};

export const del_Sub_Cat= async(req, res)=>{
 try {
  const category = req.sub_category
  const del_Category = await category.deleteOne()
  if(!del_Category){
    return res.status(400).json({
        error: errorHandler(erroor)
    })
   }

   res.json({"message":"Product successfuly deleted"})


  
 } catch (error) {
  console.log(error);
  res.status(400).json({
    error: errorHandler(error),
  });
  
 }
}

export const sub_Cat_List= async(req, res)=>{
  try {
    const categories = await Sub_Category.find()
    console.log(categories);
    if(!categories){
        return res.status(400).json({
          error: errorHandler(erroor)
        })
    }
    res.json({
      categories
    })
  } catch (error) {
    res.status(400).json({
      error: errorHandler(err),
    });
    
  }
  
}


export default {
  create,
  categoryById,
  read_Category,
  update_cat,
  del_cat,
  cat_List,


  sub_CategoryById, 
  read_Sub_Category,
  create_Sub_cat,  
  update_Sub_cat,
  del_Sub_Cat,
  sub_Cat_List
};
