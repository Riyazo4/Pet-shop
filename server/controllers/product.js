import formidable from "formidable";
import fs from "fs/promises";
import Product from "../models/product.js";
import {Category} from "../models/category.js";
import { errorHandler } from "../helpers/dbErrorHandler.js";
import _ from "lodash";
import { error, log } from "console";

export const productById = async (req, res, next, id) => {
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(400).json({ error: "Product not found" });
    }
    req.product = product;
    next();
  } catch (error) {
    console.error("Error in Product Id", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

export const read = async (req, res) => {
  req.product.photo = undefined;
  return res.json(req.product);
};

export const create = async (req, res) => {
  const form = formidable({
    keepExtensions: true,
    maxFileSize: 1 * 1024 * 1024,
  }); // 1MB size limit for the file

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Form parse error:", err);
      return res.status(400).json({
        error: "Image could not be uploaded",
        details: err.message,
      });
    }

    console.log("Fields:", fields);
    console.log("Files:************************************************\n", files);

    // Destructure and convert fields to the correct types
    const {
      name = "",
      description = "",
      price = "",
      stock = "",
      category = "",
      status = "true", // Default to true if status is not provided
    } = fields;

    // Log fields to verify structure
    console.log(fields);

    // Ensure fields are of the correct type
    const productData = {
      name: Array.isArray(name) ? name[0] : name, // Ensure it's a string
      description: Array.isArray(description) ? description[0] : description, // Ensure it's a string
      price: Array.isArray(price) ? parseFloat(price[0]) : parseFloat(price), // Ensure it's a number
      stock: Array.isArray(stock)
        ? parseInt(stock[0], 10)
        : parseInt(stock, 10), // Ensure it's a number
      category: Array.isArray(category) ? category[0] : category, // Ensure it's a string
      status: Array.isArray(status) ? status[0] === "true" : status === "true", // Convert status to boolean
    };

    // Basic validation
    if (
      !productData.name ||
      !productData.description ||
      !productData.price ||
      !productData.stock ||
      !productData.category
    ) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    try {
      // Check if the category exists
      const existingCategory = await Category.findOne({
        name: productData.category,
      });
      console.log(existingCategory);

      if (!existingCategory) {
        return res.status(400).json({
          error: "Category not found",
        });
      }

      // Set the category ID in the product data
      productData.category = existingCategory.name;

      // Create a new product
      const product = new Product(productData);
      await product.save();

      console.log(
        "---------------------- Product --------------------------\n",
        product
      );

      // Handle the image upload

      let photoFile = files.photo;

      // Check if 'files.photo' is an array and extract the file
      if (Array.isArray(photoFile)) {
        photoFile = photoFile[0]; // Take the first file if it's an array
      }

      if (photoFile) {
        const { filepath, mimetype, size } = photoFile;

        // Check for invalid file or file size exceeding 1MB
        if (!filepath || !mimetype || size > 1000000) {
          return res.status(400).json({
            error: size > 1000000
              ? 'Image should be less than 1MB in size'
              : 'Invalid file data',
          });
        }

        try {
          const data = await fs.readFile(filepath);
          product.photo.data = data;
          product.photo.contentType = mimetype;
        } catch (readError) {
          console.error('File read error:', readError);
          return res.status(400).json({
            error: 'Error reading the file',
            details: readError.message,
          });
        }
      }

      // Save the product to the database
      const result = await product.save();
      res.json(result);
    } catch (saveErr) {
      console.error("Save error:", saveErr);
      return res.status(400).json({
        error: errorHandler(saveErr),
      });
    }
  });
};

export const remove = async (req, res) => {
  try {
    let product = req.product;
    let deletedProduct = await product.deleteOne();
    if (!deletedProduct) {
      return res.status(400).json({
        error: errorHandler(error),
      });
    }
    res.json({ message: "Product successfully deleted" });
  } catch (error) {
    console.error("Error in Product Id", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

export const updatePdt = async (req, res) => {
  const form = formidable({
    keepExtensions: true,
    maxFileSize: 1 * 1024 * 1024,
  }); // 1MB size limit for the file


  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Form parse error:", err);
      return res.status(400).json({
        error: "Image could not be uploaded",
        details: err.message,
      });
    }

    const name = fields.name ? fields.name[0] : "";
    const description = fields.description ? fields.description[0] : "";
    const price = fields.price ? fields.price[0] : "";
    const stock = fields.stock ? fields.stock[0] : "";
    const category = fields.category ? fields.category[0] : "";
    const status = fields.status ? fields.status[0] : "";

    if (!name || !description || !price || !stock || !category) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    let product = req.product;
    product = _.extend(product, {
      name,
      description,
      price,
      stock,
      category,
      status,
    });

    let photoFile = files.photo;

    // Check if 'files.photo' is an array and extract the file
    if (Array.isArray(photoFile)) {
      photoFile = photoFile[0]; // Take the first file if it's an array
    }

    if (photoFile) {
      const { filepath, mimetype, size } = photoFile;

      // Check for invalid file or file size exceeding 1MB
      if (!filepath || !mimetype || size > 1000000) {
        return res.status(400).json({
          error: size > 1000000
            ? 'Image should be less than 1MB in size'
            : 'Invalid file data',
        });
      }

      try {
        const data = await fs.readFile(filepath);
        product.photo.data = data;
        product.photo.contentType = mimetype;
      } catch (readError) {
        console.error('File read error:', readError);
        return res.status(400).json({
          error: 'Error reading the file',
          details: readError.message,
        });
      }
    }

    try {
      const result = await product.save();
      res.json(result);
    } catch (saveErr) {
      console.error("Save error:", saveErr);
      return res.status(400).json({
        error: errorHandler(saveErr),
      });
    }
  });
};






export const listCategories = async (req, res) => {
  try {
    const categories = await Product.distinct("category", {});
    if (!categories) {
      return res.status(400).json({
        error: "No categories found",
      });
    }
    res.json(categories);
  } catch (error) {
    console.error("Error fetching categories", error);
    return res.status(500).json({
      error: "An error occurred while fetching categories",
      details: error.message,
    });
  }
};

/**
 * list products by search
 * we will implement product search in react frontend
 * we will show categories in checkbox and price range in radio buttons
 * as the user clicks on those checkbox and radio buttons
 * we will make api request and show the products to users based on what he wants
 */

export const listBySearch = async (req, res) => {
  try {
    const order = req.body.order || "desc";
    const sortBy = req.body.sortBy || "_id";
    const limit = req.body.limit ? parseInt(req.body.limit) : 100;
    const skip = parseInt(req.body.skip);
    let findArgs = {};

    // Process filters from the request body
    Object.keys(req.body.filters).forEach((key) => {
      if (req.body.filters[key].length > 0) {
        if (key === "price") {
          findArgs[key] = {
            $gte: req.body.filters[key][0],
            $lte: req.body.filters[key][1],
          };
        } else {
          findArgs[key] = req.body.filters[key];
        }
      }
    });

    // Fetch products based on the search criteria
    const data = await Product.find(findArgs)
      .select("-photo")
      .populate("category")
      .sort([[sortBy, order]])
      .skip(skip)
      .limit(limit);

    if (!data) {
      return res.status(400).json({
        error: "Products not found",
      });
    }

    res.json({
      size: data.length,
      data,
    });
  } catch (error) {
    return res.status(500).json({
      error: "An error occurred while fetching related products",
      details: error.message,
    });
  }
};

export const photo = async (req, res, next) => {
  if (req.product.photo.data) {
    res.set("Content-Type", req.product.photo.contentType);
    return res.send(req.product.photo.data);
  }
  next();
};

export default {
  productById,
  read,
  create,
  remove,
  updatePdt,
 
  listCategories,
  listBySearch,

  photo,
};
