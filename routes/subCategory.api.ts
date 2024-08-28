import { Router } from "express";
import {
  createSubcategory,
  deleteSubcategory,
  filterData,
  getSubcategories,
  getSubcategory,
  updateSubcategory,
} from "../controllers/subCategories";
import {
  createSubcategoryValidator,
  deleteSubcategoryValidator,
  getSubcategoryValidator,
  updateSubcategoryValidator,
} from "../utils/validation/subcategoriesValidator";
import { allowedTo, checkActive, protectRoutes } from "../controllers/auth";

const subCategoryRoute: Router = Router({ mergeParams: true });

subCategoryRoute
  .route("/")
  .get(filterData, getSubcategories)
  .post(
    protectRoutes,
    checkActive,
    allowedTo("manager", "admin"),
    createSubcategoryValidator,
    createSubcategory
  );

subCategoryRoute
  .route("/:id")
  .get(getSubcategoryValidator, getSubcategory)
  .put(
    protectRoutes,
    checkActive,
    allowedTo("manager", "admin"),
    updateSubcategoryValidator,
    updateSubcategory
  )
  .delete(
    protectRoutes,
    checkActive,
    allowedTo("manager", "admin"),
    deleteSubcategoryValidator,
    deleteSubcategory
  );

export default subCategoryRoute;
