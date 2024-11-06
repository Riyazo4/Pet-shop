import express from "express"
const router = express.Router();

import category from "../controllers/category.js"

const {
  create,
  categoryById,
  read_Category, 
  update_cat,
  del_cat,
  cat_List,

// sub_Category
  sub_CategoryById, 
  read_Sub_Category,
  create_Sub_cat,  
  update_Sub_cat,
  del_Sub_Cat,
  sub_Cat_List
} = category

import auth from "../controllers/auth.js"
const { requireSignin, isAdmin, isAuth } =auth
import { userById } from "../controllers/user.js";


// Main Category Routes
router.get("/category/:categoryById", read_Category);
router.post("/category/create/:userId", requireSignin, isAuth, isAdmin, create);
router.put(
  "/category/:categoryById/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  update_cat
);
router.delete(
  "/category/:categoryById/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  del_cat
);
router.get("/categories", cat_List);



// SUB_CATEGORY

router.get("/category/sub/:sub_CategoryById", read_Sub_Category);
router.post(
  "/category/create_Sub_cat/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  create_Sub_cat
);

router.put(
  "/category/sub/:sub_CategoryById/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  update_Sub_cat
);
router.delete(
  "/category/sub/:sub_CategoryById/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  del_Sub_Cat
);
router.get("/subCategories", sub_Cat_List);





router.param("categoryById", categoryById);
router.param("sub_CategoryById", sub_CategoryById);

router.param("userId", userById);

export default router;
