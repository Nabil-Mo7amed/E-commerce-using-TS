import { NextFunction, Request, Response } from "express";
import subCategoryModel from "../models/subCategory.model";
import { SubCategories } from "../interface/subCategory.interface";
import { createOne, deleteOne, getAll, getOne, updateOne } from "./refactorHandler";
import { FilterData } from "../interface/filterData";

export const filterData = (req: Request, res: Response, next: NextFunction) => {
  let filterData: FilterData = {};
  if (req.params.categoryId) { filterData.category = req.params.categoryId };
  console.log(filterData);
  
  req.filterData = filterData;
  next();
}

export const createSubcategory = createOne<SubCategories>(subCategoryModel)
export const getSubcategories = getAll<SubCategories>(subCategoryModel, 'subcategories')
export const getSubcategory = getOne<SubCategories>(subCategoryModel)
export const updateSubcategory = updateOne<SubCategories>(subCategoryModel)
export const deleteSubcategory = deleteOne<SubCategories>(subCategoryModel)