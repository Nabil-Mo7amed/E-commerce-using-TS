import { Application, Request, Response, NextFunction } from "express";

import ApiErrors from "../utils/apiErrors";
import globalErrors from "../middlewares/globalErrors";
import subCategoryRoute from "./subCategory.api";
import categoryRoute from "./category.api";

const Routes = (app: Application): void => {
  app.use("/api/v1/categories",categoryRoute);
  app.use("/api/v1/subcategories",subCategoryRoute);
  app.all("*", (req: Request, res: Response, next: NextFunction) => {
    next(new ApiErrors(`The router ${req.originalUrl} is not found`, 400));
  });
  app.use(globalErrors);
};

export default Routes;
