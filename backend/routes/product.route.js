import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

//pick method depending on url and do function in product controller js file
//for each route we have their associated methods
//get all products
router.get("/", getProducts);

//create a product
router.post("/", createProduct);

//update a product
router.put("/:id", updateProduct);

//delete a product
router.delete("/:id", deleteProduct);

export default router;