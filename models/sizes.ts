import mongoose from "mongoose";
// export interface Sizes {
//   _id: string,
//   productName?: string;
//   price: number;
//   productImg: string;
//   category: string,
//   brand: string,
//   gender: string,
//   kids: string,
//   color: string,
//   // size: string,
//   size: {
//     menSizes: { pantsOrJeans: boolean, shoe: boolean, tees: boolean, },
//     womenSizes: { dresses: boolean, pantsOrJeans: boolean, skirts: boolean, shoes: boolean, tops: boolean, }
//   },
//   author: string;
//   inStock: boolean;
//   created: Date;
// }


export interface Sizes {
  size: {
    menSizes: { pantsOrJeans: boolean, shoes: boolean, tees: boolean },
    womenSizes: { dresses: boolean, pantsOrJeans: boolean, skirts: boolean, shoes: boolean, tops: boolean }
  }
}
const sizeSchema = new mongoose.Schema<Sizes>({
  // const sizeSchema = new mongoose.Schema({
  size: {
    menSizes: {
      pantsOrJeans: {
        '28': { type: Boolean, default: false },
        '30': { type: Boolean, default: false },
        '32': { type: Boolean, default: false },
        '34': { type: Boolean, default: false },
        '36': { type: Boolean, default: false },
        '38': { type: Boolean, default: false },
      },
      shoes: {
        '9': { type: Boolean, default: false },
        '8': { type: Boolean, default: false },
        '9/5': { type: Boolean, default: false },
        '10': { type: Boolean, default: false },
        '10/5': { type: Boolean, default: false },
        '11': { type: Boolean, default: false },
        '12': { type: Boolean, default: false },
      },
      tees: {
        SX: { type: Boolean, default: false },
        S: { type: Boolean, default: false },
        M: { type: Boolean, default: false },
        L: { type: Boolean, default: false },
        XL: { type: Boolean, default: false },
        XXL: { type: Boolean, default: false },
      }
    },
    womenSizes: {
      dresses: {
        SX: { type: Boolean, default: false },
        S: { type: Boolean, default: false },
        M: { type: Boolean, default: false },
        L: { type: Boolean, default: false },
        XL: { type: Boolean, default: false },
      },
      pantsOrJeans: {
        '24': { type: Boolean, default: false },
        '25': { type: Boolean, default: false },
        '26': { type: Boolean, default: false },
        '27': { type: Boolean, default: false },
        '28': { type: Boolean, default: false },
        '29': { type: Boolean, default: false },
        '30': { type: Boolean, default: false },
        '31': { type: Boolean, default: false },
        '32': { type: Boolean, default: false },
        '33': { type: Boolean, default: false },
        '34': { type: Boolean, default: false },
      },
      skirts: {
        SX: { type: Boolean, default: false },
        S: { type: Boolean, default: false },
        M: { type: Boolean, default: false },
        L: { type: Boolean, default: false },
        XL: {
          type: Boolean, default: false
        },
      },
      shoes: {
        '6': { type: Boolean, default: false },
        '7': { type: Boolean, default: false },
        '8': { type: Boolean, default: false },
        '9': { type: Boolean, default: false },
        '10': { type: Boolean, default: false },
      },
      tops: {
        SX: { type: Boolean, default: false },
        S: { type: Boolean, default: false },
        M: { type: Boolean, default: false },
        L: { type: Boolean, default: false },
        XL: { type: Boolean, default: false },
      }
    }

  },

})


export default mongoose.models.Size || mongoose.model<Sizes>("Size", sizeSchema);
