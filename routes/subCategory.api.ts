import { Router } from "express";
import {
  createSubcategory,
  deleteSubcategory,
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

const subCategoryRoute: Router = Router();

subCategoryRoute
  .route("/")
  .get(getSubcategories)
  .post(createSubcategoryValidator, createSubcategory);

subCategoryRoute
  .route("/:id")
  .get(getSubcategoryValidator, getSubcategory)
  .put(updateSubcategoryValidator, updateSubcategory)
  .delete(deleteSubcategoryValidator, deleteSubcategory);

export default subCategoryRoute;
