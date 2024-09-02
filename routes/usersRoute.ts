import { Router } from "express";
import {
  changeLoggedUserPasswordValidator,
  createUserValidator,
  deleteUserValidator,
  getUserValidator,
  updateLoggedUserValidator,
  updateUserValidator,
} from "./../utils/validation/usersValidator";
import {
  changeLoggedUserPassword,
  changeUserPassword,
  createUser,
  deleteUser,
  getUser,
  getUsers,
  resizeUserImage,
  setLoggedUserId,
  updateLoggedUser,
  updateUser,
  uploadUserImage,
} from "../controllers/users";
import { allowedTo, checkActive, protectRoutes } from "../controllers/auth";

const usersRoute: Router = Router();

usersRoute.use(protectRoutes, checkActive);

usersRoute.get('/me', setLoggedUserId, getUser)
usersRoute.put('/updateMe', updateLoggedUserValidator, updateLoggedUser)
usersRoute.put('/changeMyPassword', changeLoggedUserPasswordValidator, changeLoggedUserPassword)
usersRoute.delete('/deleteMe', allowedTo('user'), setLoggedUserId, deleteUser)




usersRoute.use(allowedTo("manager"));
usersRoute
  .route("/")
  .get(getUsers)
  .post(uploadUserImage, resizeUserImage, createUserValidator, createUser);

usersRoute
  .route("/:id")
  .get(getUserValidator, getUser)
  .put(uploadUserImage, resizeUserImage, updateUserValidator, updateUser)
  .delete(deleteUserValidator, deleteUser);

usersRoute.put("/:id/changePassword", changeUserPassword);

export default usersRoute;
