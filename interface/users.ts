import { Document } from "mongoose";
import { Products } from "./products";
type Role = 'manager' | 'admin' | 'user'
export interface Users extends Document {
  email: string;
  password: string;
  confirmNewPassword:String;
  // passwordConfirmation: string;
  name: string;
  image: string;
  role: Role;
  active: boolean;
  wishlist:Products[];
  address:[string] ;
  passwordChangedAt: Date | number;
  resetCode: string;
  resetCodeExpireTime: Date | number;
  resetCodeVerify: boolean
}