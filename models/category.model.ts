import { Schema, model } from "mongoose";
import { Categories } from "../interface/category.interface";

const schema: Schema = new Schema<Categories>(
  {
    name: { type: String, required: true, trim: true, unique: true },
  },
  { timestamps: true }
);

export default model<Categories>("category", schema);
