import { Application, Request, Response, NextFunction } from "express";
import * as all from "../interface";
import ApiErrors from "../utils/apiErrors";
import globalErrors from "../middlewares/globalErrors";
import subCategoryRoute from "./subCategory.api";
import categoryRoute from "./category.api";
import productsRoute from "./productsRoute";
import usersRoute from "./usersRoute";
import authRoute from "./authRoute";
import reviewsRoute from "./reviewsRoute";
import wishlistRoute from "./wishlistRoute";
import couponsRoute from "./couponsRoute";
import cartsRoute from "./cartsRoute";
import ordersRoute from "./ordersRoute";

const Routes = (app: Application): void => {
  app.use("/api/v1/categories", categoryRoute);
  app.use("/api/v1/subcategories", subCategoryRoute);
  app.use("/api/v1/products", productsRoute);
  app.use("/api/v1/users", usersRoute);
  app.use("/api/v1/reviews", reviewsRoute);
  app.use("/api/v1/wishlist", wishlistRoute);
  app.use("/api/v1/coupons", couponsRoute);
  app.use("/api/v1/carts", cartsRoute);
  app.use("/api/v1/orders", ordersRoute);
  app.use("/api/v1/users", usersRoute);
  app.use("/api/v1/auth", authRoute);

  app.all("*", (req: Request, res: Response, next: NextFunction) => {
    next(new ApiErrors(`The router ${req.originalUrl} is not found`, 400));
  });
  app.use(globalErrors);
};

export default Routes;
