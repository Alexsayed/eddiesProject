import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Products } from "../../models/products";

type Props = {
  editFormId: string;
  productData: Products;
  // forNewProduct?: boolean;
};

const productPage = ({ editFormId, productData }: Props) => {
  console.log('=======productData', productData)
  return (
    <>
      {/* next up: selecting size and show avelibale sizes. if not avelibale size then deactivitaing that protecular size */}
      <div id={editFormId} className="w-full">
        <div className="inline-block w-20 align-top  ml-2.5 text-center">
          <ul>
            <li className="h-16 w-16  border mb-1 rounded-sm"><img src={productData.productImg} alt="" /></li>
            <li className="h-16 w-16 border mb-1 rounded-sm"><img src={productData.productImg} alt="" /></li>
            <li className="h-16 w-16 border mb-1 rounded-sm"><img src={productData.productImg} alt="" /></li>
            <li className="h-16 w-16 border mb-1 rounded-sm"><img src={productData.productImg} alt="" /></li>
            <li className="h-16 w-16 border mb-1 rounded-sm"><img src={productData.productImg} alt="" /></li>
          </ul>
        </div>
        <div className="w-1/2 ml-2.5 inline-block">
          <img className="h-96 w-full" src={productData.productImg} alt="" />
        </div>
        <div className="inline-block h-96 align-top ml-2.5 border w-1/3 text-center">
          <p>{productData.brand} {productData.productName}</p>
          <p>{productData.price}</p>
          <p>{productData.color}</p>
          {/* <p>{productData.sizes}</p> */}
          <p>{productData._id}</p>
          <button className="rounded-sm border bg-green-400">Add to Cart</button>
        </div>

      </div>

    </>
  )
}
export default productPage;
