import asyncHandler from "express-async-handler";
import { Request, Response, NextFunction } from "express";
import subCategoryModel from "../models/subCategory.model"
import ApiErrors from "../utils/apiErrors";
import { SubCategories } from "../interface/subCategory.interface";

export const createSubcategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const subcategory: SubCategories = await subCategoryModel.create(req.body);
  res.status(201).json({ data: subcategory });
});

export const getSubcategories = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const categories = await subCategoryModel.find();
  res.status(200).json({ data: categories });
})

export const getSubcategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const subcategory = await subCategoryModel.findById(req.params.id);
  if (!subcategory) { return next(new ApiErrors('Subcategory Not Found', 404)) };
  res.status(200).json({ data: subcategory })
});

export const updateSubcategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const subcategory = await subCategoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!subcategory) { return next(new ApiErrors('subCategory Not Found', 404)) };
  res.status(200).json({ data: subcategory });
})

export const deleteSubcategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const subcategory = await subCategoryModel.findByIdAndDelete(req.params.id);
  if (!subcategory) { return next(new ApiErrors('subCategory Not Found', 404)) };
  res.status(204).json();
})