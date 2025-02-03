import dbConnect from "../../lib/dbConnect";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { mutate } from "swr";
import Link from "next/link";
import { BsPen, BsTrash } from "react-icons/bs";
// import Product, { Products } from "../../models/products";
import { Products } from "../../models/products";

type Props = {
  // editFormId: string;
  getAllProducts: Products[];
  // getAllProducts: string[];
  // forNewProduct?: boolean;

};


// Handle home page
const HomePage = ({ getAllProducts }: Props) => {
  // console.log('=========getAllProducts HomePage', getAllProducts[0].sizes.menSizes.jackets);
  // console.log('=========getAllProducts HomePage', getAllProducts);

  // // =======================================Original ============================================
  // const [products, setProduct] = useState<any>([]);

  // useEffect(() => {

  //   const fetchData = async () => {
  //     const response = await fetch('http://localhost:3000/api/products');
  //     // console.log('=============response', response)
  //     const json = await response.json();
  //     // console.log('=============json', json)

  //     setProduct(json.data);
  //   };
  //   fetchData();
  // }, []);
  // // =======================================Original ============================================


  return (
    <>
      <div className="border w-full"> ahhah
        <ul className="text-center">xaxa
          <p>
            {getAllProducts.length ? 'xoxoxoxo' : 'hahaha ✅'}
          </p>

          {getAllProducts.map((item: any, i: any) => (
            <li key={i} className="border h-72 m-1.5 inline-block rounded-lg sm:w-2/5 md:w-1/4 lg:w-1/5 truncate" >
              <span>{item.id}</span>

              <div className="relative w-0 h-0 float-right">
                <div className="inline-block absolute right-1/4"> <BsPen /></div>
                <div className="inline-block absolute  right-2/4"> <BsTrash /></div>
              </div>
              <Link href={item._id}>
                <div className="h-56 w-full">
                  <img className=" h-56 w-full object-fill" src={item.productImg} />
                </div>
                <div className="mt-1">
                  <p>{item.productName}</p>
                </div>
                <div className="mx-2 block  text-start  ">
                  <div className="inline">
                    <span>${item.price}</span>
                  </div>
                  <div className="inline float-right">
                    <span className="text-emerald-600">In stock: {item.inStock}</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}


export default HomePage;