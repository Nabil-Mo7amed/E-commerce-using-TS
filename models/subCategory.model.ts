import { Schema, model } from "mongoose";
import { SubCategories } from "../interface/subCategory.interface";

const schema: Schema = new Schema<SubCategories>(
  {
    name: { type: String, required: true, trim: true, unique: true },
    category: { type: Schema.Types.ObjectId, required: true },
  },
  { timestamps: true }
);

export default model<SubCategories>("subCategory", schema);
