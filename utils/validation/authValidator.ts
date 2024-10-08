import { RequestHandler } from "express";
import { check } from "express-validator";
import validatorMiddleware from "../../middlewares/validatorMiddleware";
import usersModel from "../../models/usersModel";

export const signupValidator: RequestHandler[] = [
  check("name")
    .notEmpty()
    .withMessage("please Enter Name")
    .isLength({ min: 2, max: 50 })
    .withMessage(""),
  check("email")
    .notEmpty()
    .withMessage("Email Required")
    // .isEmail()
    // .withMessage("11111111")
    .custom(async (value: string, { req }): Promise<boolean> => {
      const user = await usersModel.findOne({ email: value });
      if (user) {
        return Promise.reject(new Error(("not_available")));
      }
      return true;
    }),
  check("password")
    .notEmpty()
    .withMessage("Enter Your Password")
    .isLength({ min: 6, max: 20 })
    .withMessage("")
    .custom((password: string, { req }): boolean => {
      if (password !== req.body.confirmNewPassword) {
        throw new Error(("validation_password_match"));
      }
      return true;
    }),
//   check("passwordConfirmation")
//     .notEmpty()
//     .withMessage((val, { req }) => {
//       return req.__("validation_passwordConfirmation");
//     })
//     .isLength({ min: 6, max: 20 })
//     .withMessage((val, { req }) => {
//       return req.__("validation_passwordConfirmation_length");
//     }),
  validatorMiddleware,
];

export const loginValidator: RequestHandler[] = [
  check("email")
    .notEmpty()
    .withMessage((val, { req }) => {
      return req.__("validation_email");
    })
    .isEmail()
    .withMessage((val, { req }) => {
      return req.__("validation_email_check");
    }),
  check("password")
    .notEmpty()
    .withMessage((val, { req }) => {
      return req.__("validation_password");
    })
    .isLength({ min: 6, max: 20 })
    .withMessage((val, { req }) => {
      return req.__("validation_password_length");
    }),
  validatorMiddleware,
];

export const checkEmailValidator: RequestHandler[] = [
  check("email")
    .notEmpty()
    .withMessage((val, { req }) => {
      return req.__("validation_email");
    })
    .isEmail()
    .withMessage((val, { req }) => {
      return req.__("validation_email_check");
    }),
  validatorMiddleware,
];

export const resetPasswordValidator: RequestHandler[] = [
  check("passwordConfirmation")
    .notEmpty()
    .withMessage((val, { req }) => {
      return req.__("validation_passwordConfirmation");
    })
    .isLength({ min: 6, max: 20 })
    .withMessage((val, { req }) => {
      return req.__("validation_passwordConfirmation_length");
    }),
  check("password")
    .notEmpty()
    .withMessage((val, { req }) => {
      return req.__("validation_password");
    })
    .isLength({ min: 6, max: 20 })
    .withMessage((val, { req }) => {
      return req.__("validation_password_length");
    })
    .custom((val: string, { req }): boolean => {
      if (val !== req.body.confirmNewPassword) {
        throw new Error(`${req.__("validation_password_match")}`);
      }
      return true;
    }),
  validatorMiddleware,
];

export const changeUserPasswordValidator: RequestHandler[] = [

  check("password")
    .notEmpty()
    .withMessage((val, { req }) => {
      return req.__("validation_password");
    })
    .isLength({ min: 6, max: 20 })
    .withMessage((val, { req }) => {
      return req.__("validation_password_length");
    })
    .custom((val: string, { req }): boolean => {
      if (val !== req.body.confirmNewPassword) {
        throw new Error(`${req.__("validation_password_match")}`);
      }
      return true;
    }),
  validatorMiddleware,
];
