import categoryModel from "../models/category.model"; 
import { Categories } from "../interface/category.interface";
import { createOne, deleteOne, getAll, getOne, updateOne } from "./refactorHandler";

export const createCategory = createOne<Categories>(categoryModel)
export const getCategories = getAll<Categories>(categoryModel, 'categories')
export const getCategory = getOne<Categories>(categoryModel)
export const updateCategory = updateOne<Categories>(categoryModel)
export const deleteCategory = deleteOne<Categories>(categoryModel)