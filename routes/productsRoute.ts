import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  resizeImages,
  updateProduct,
  uploadProductImages,
} from "./../controllers/products";
import { Router } from "express";
import {
  createProductValidator,
  deleteProductValidator,
  getProductValidator,
  updateProductValidator,
} from "../utils/validation/productsValidator";
import { allowedTo, checkActive, protectRoutes } from "../controllers/auth";
const productsRoute: Router = Router();

productsRoute
  .route("/")
  .get(getProducts)
  .post(
    // protectRoutes,
    // checkActive,
    // allowedTo("manager", "admin"),
    uploadProductImages,
    resizeImages,
    // createProductValidator,
    createProduct
  );

productsRoute
  .route("/:id")
  .get(getProductValidator, getProduct)
  .put(
    protectRoutes,
    checkActive,
    allowedTo("manager", "admin"),
    updateProductValidator,
    updateProduct
  )
  .delete(
    protectRoutes,
    checkActive,
    allowedTo("manager", "admin"),
    deleteProductValidator,
    deleteProduct
  );

export default productsRoute;
