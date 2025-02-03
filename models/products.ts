// import mongoose from "mongoose";
// import mongoose, { Document } from 'mongoose';
import mongoose, { Schema, Document, Model } from 'mongoose';
import Size, { ISizes } from './sizes';
// export interface Products extends mongoose.Document {
//   productName: string;
//   price: number;
//   productImg: string;
//   author: string;
//   inStock: boolean;
//   created: Date;
// }



export interface Products extends Document {
  _id: string,
  // quantity: number
  productName: string;
  price: number;
  productImg: string;
  category: string,
  brand: string,
  gender: string,
  kids: string,
  color: string,
  // sizes: string[],
  sizes: ISizes,
  // size: {
  //   menSizes: { pantsOrJeans: boolean, shoe: boolean, tees: boolean, },
  //   womenSizes: { dresses: boolean, pantsOrJeans: boolean, skirts: boolean, shoes: boolean, tops: boolean, }
  // },
  author: string;
  inStock: boolean;
  created: Date;

}
// interface Products {
//   _id: string,
//   productName: string;
//   price: number;
//   productImg: string;
//   category: string,
//   brand: string,
//   gender: string,
//   kids: string,
//   color: string,
//   // sizes: string[],
//   sizes: ISizes,
//   // size: {
//   //   menSizes: { pantsOrJeans: boolean, shoe: boolean, tees: boolean, },
//   //   womenSizes: { dresses: boolean, pantsOrJeans: boolean, skirts: boolean, shoes: boolean, tops: boolean, }
//   // },
//   author: string;
//   inStock: boolean;
//   created: Date;
// }
// interface ProductsDocument extends mongoose.Document, Products {}


const productSchema = new mongoose.Schema<Products>({
  // const productSchema = new Schema<Products>({
  // quantity: Number,
  // _id: String,
  productName: String,
  price: Number,
  productImg: String,
  category: String,
  brand: String,
  gender: String,
  // kids: String,
  color: String,
  // size: String,
  // sizes: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Size"
  //   },
  // ],
  sizes: { type: mongoose.Schema.Types.ObjectId, ref: "Size" },
  // sizesHOLD: { 
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Size",
  // },
  // sizeHOLD: {
  //   menSizes: {
  //     pantsOrJeans: {
  //       28: { type: Boolean, default: false },
  //       30: { type: Boolean, default: false },
  //       32: { type: Boolean, default: false },
  //       34: { type: Boolean, default: false },
  //       36: { type: Boolean, default: false },
  //       38: { type: Boolean, default: false },
  //     },
  //     shoe: {
  //       8: { type: Boolean, default: false },
  //       9: { type: Boolean, default: false },
  //       9.5: { type: Boolean, default: false },
  //       10: { type: Boolean, default: false },
  //       10.5: { type: Boolean, default: false },
  //       11: { type: Boolean, default: false },
  //       12: { type: Boolean, default: false },
  //     },
  //     tees: {
  //       SX: { type: Boolean, default: false },
  //       S: { type: Boolean, default: false },
  //       M: { type: Boolean, default: false },
  //       L: { type: Boolean, default: false },
  //       XL: { type: Boolean, default: false },
  //       XXL: { type: Boolean, default: false },
  //     }
  //   },
  //   womenSizes: {
  //     dresses: {
  //       SX: { type: Boolean, default: false },
  //       S: { type: Boolean, default: false },
  //       M: { type: Boolean, default: false },
  //       L: { type: Boolean, default: false },
  //       XL: { type: Boolean, default: false },
  //     },
  //     pantsOrJeans: {
  //       24: { type: Boolean, default: false },
  //       25: { type: Boolean, default: false },
  //       26: { type: Boolean, default: false },
  //       27: { type: Boolean, default: false },
  //       28: { type: Boolean, default: false },
  //       29: { type: Boolean, default: false },
  //       30: { type: Boolean, default: false },
  //       31: { type: Boolean, default: false },
  //       32: { type: Boolean, default: false },
  //       33: { type: Boolean, default: false },
  //       34: { type: Boolean, default: false },
  //     },
  //     skirts: {
  //       SX: { type: Boolean, default: false },
  //       S: { type: Boolean, default: false },
  //       M: { type: Boolean, default: false },
  //       L: { type: Boolean, default: false },
  //       XL: {
  //         type: Boolean, default: false
  //       },
  //     },
  //     shoes: {
  //       6: { type: Boolean, default: false },
  //       7: { type: Boolean, default: false },
  //       8: { type: Boolean, default: false },
  //       9: { type: Boolean, default: false },
  //       9.5: { type: Boolean, default: false },
  //       10: { type: Boolean, default: false },
  //     },
  //     tops: {
  //       SX: { type: Boolean, default: false },
  //       S: { type: Boolean, default: false },
  //       M: { type: Boolean, default: false },
  //       L: { type: Boolean, default: false },
  //       XL: { type: Boolean, default: false },
  //     }
  //   }

  // },
  author: String,
  inStock: Boolean,
  created: {
    type: Date,
    default: Date.now
  },


});
// var User = mongoose.model("Users", userSchema);
// export default Users;
// export default mongoose.models.User || mongoose.model("User", userSchema); 
// mongoose.models = {};
// export default mongoose.models.Product || mongoose.model<Products>("Product", productSchema);
const Product = mongoose.models.Product || mongoose.model<Products>('Product', productSchema);
// const Product = mongoose.model<Products>('Product', productSchema);
export default Product;
// const ProductModel = mongoose.model<ProductsDocument>('Product', productSchema);
// export default mongoose.model<Products>("Product", productSchema);

// var Product = mongoose.model('Product', productSchema);

// export default Product;