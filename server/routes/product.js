import express from "express"
const router = express.Router();

import product from "../controllers/product.js"


const {
  create,
  productById,
  read,
  remove,
  updatePdt,
 
  listCategories,
   
  listBySearch,
  photo
} = product

import auth from "../controllers/auth.js"
const { requireSignin, isAdmin, isAuth } =auth
import { userById } from "../controllers/user.js";


// CRUD OPREATION
router.post("/product/create/:userId", requireSignin, isAuth, isAdmin, create);
router.get("/product/:productId", read);
router.delete(
  "/product/:productId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  remove
);
router.put(
  "/product/:productId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  updatePdt
);

// PRODUCTS BY SELL AND ARRIVAL ON REQUEST QUERY PARAMS


// LIST PRODUCT CATEGORIES
router.get("/products/categorise",listCategories)


// list products by search
router.post("/products/by/search", listBySearch)

// Get product Photo
router.get("/products/photo/:productId", photo)




router.param("userId", userById);
router.param("productId", productById);

export default router;
