import { RequestHandler } from "express";
import { check } from "express-validator";
import validatorMiddleware from "../../middlewares/validatorMiddleware";
import subCategoryModel from "../../models/subCategory.model";
import { SubCategories } from "../../interface/subCategory.interface";

export const createCategoryValidator: RequestHandler[] = [
  check('name')
    .notEmpty().withMessage('Category Name is Required')
    .isLength({ min: 2, max: 50 }).withMessage('Name length must be between 2 and 50'),
  validatorMiddleware
]

export const updateCategoryValidator: RequestHandler[] = [
  check('name')
    .notEmpty().withMessage('Category Name is Required')
    .isLength({ min: 2, max: 50 }).withMessage('Name length must be between 2 and 50'),
  validatorMiddleware
]

export const getCategoryValidator: RequestHandler[] = [
  check('id').isMongoId().withMessage('Invalid Mongo Id'),
  validatorMiddleware
]

export const deleteCategoryValidator: RequestHandler[] = [
  check('id').isMongoId().withMessage('Invalid Mongo Id')
    .custom(async (val) => {
      const subcategories = await subCategoryModel.find({ category: val });
      if (subcategories.length > 0) {
        // TODO: less performance
        // subcategories.map(async (subcategory: SubCategories) => {
        //   await subCategoriesModel.findByIdAndDelete(subcategory._id)
        // })

        // * bulkWrite more performance
        const bulkOption = subcategories.map((subcategory: SubCategories) => ({
          deleteOne: { filter: { _id: subcategory._id } }
        }))
        await subCategoryModel.bulkWrite(bulkOption)
      }
      return true;
    }),
  validatorMiddleware
]