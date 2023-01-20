import express from "express";
import { userSignup, userLogin } from "../controller/controller.js";
import {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
  addProductInCart,
  getCartProducts,
  updateCartProduct,
  deleteCartProduct,
} from "../controller/product-controller.js";

const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);
router.get("/products", getProducts);
router.get("/product/:id", getProductById);
router.post("/createproduct", addProduct);
router.patch("/updateproduct/:id", updateProduct);
router.delete("/deleteproduct/:id", deleteProduct);
router.post("/addtocart", addProductInCart);
router.get("/cartproduct", getCartProducts);
router.patch("/updateCartProduct/:id", updateCartProduct);
router.delete("/deletecartproduct/:id", deleteCartProduct);

export default router;
