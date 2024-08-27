import { Document, Schema } from "mongoose";
import { Categories } from "./category.interface";

export interface SubCategories extends Document {
  name: string;
  category: Categories;
}