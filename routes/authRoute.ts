import { Router } from "express";
import { login, protectRoutes, signup } from "../controllers/auth";
import { loginValidator, signupValidator } from "../utils/validation/authValidator";

const authRoute: Router = Router();

authRoute.route('/signup').post(signupValidator,signup);
authRoute.route('/login').post(loginValidator,login);

// authRoute.route('/:id')
//   .get(getUserValidator, getUser)
//   .put(uploadUserImage, resizeUserImage, updateUserValidator, updateUser)
//   .delete(deleteUserValidator, deleteUser);

export default authRoute;