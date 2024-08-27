import { SubCategories } from './../interface/subCategory.interface';
import { Schema, model } from "mongoose";

const subCategoriesSchema: Schema = new Schema<SubCategories>({
  name: { type: String, required: true, trim: true, unique: true },
  category: { type: Schema.Types.ObjectId, required: true, ref: 'categories' }
}, { timestamps: true });

subCategoriesSchema.pre<SubCategories>(/^find/, function (next) {
  this.populate({ path: 'category', select: 'name' })
  next()
})

export default model<SubCategories>('subCategories', subCategoriesSchema)