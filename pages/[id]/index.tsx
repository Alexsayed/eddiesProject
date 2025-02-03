import { createContext, useState } from "react";
import { useRouter } from "next/router";
import ProductPage from "../../components/home/product";
import Navbar from "../../components/navbar/navbar";

import Link from "next/link";
import dbConnect from "../../lib/dbConnect";
// import Pet, { Pets } from "../../models/Pet";
import Product, { Products } from "../../models/products";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import Size from '../../models/sizes';

console.log('======[id]/index HIT')
interface Params extends ParsedUrlQuery {
  id: string;
}

type Props = {
  getProduct: Products;
  // username: string

};
// in Case i lose the searct: how to update shopping cart in Navbar.tsx when we click add to cart from Product.tsx





/* Allows you to view pet card info and delete pet card*/
// const PetPage = ({ pet }: Props) => {
const PetPage = ({ getProduct, }: Props) => {
  const router = useRouter();
  // const [message, setMessage] = useState("");
  const [message, setMessage] = useState('Hello, world!');

  // next time: try to do it like below
  // const handleDelete = async () => {
  //   const petID = router.query.id;

  //   try {
  //     // await fetch(`/api/pets/${petID}`, {
  //     await fetch(`/productss/${petID}`, {
  //       method: "Delete",
  //     });
  //     router.push("/");
  //   } catch (error) {
  //     setMessage("Failed to delete the pet.");
  //   }
  // };
  // console.log('==============getProduct', getProduct) 


  return (

    // <CurrentUserContext.Provider value={currentUser}> 
    <>
      < ProductPage editFormId="edit-pet-form12" productData={getProduct} />



    </>
    // </CurrentUserContext.Provider>
    // 

    // <>

    //   <div>ddd</div>

    //   <div key={pet._id}>
    //     <div>We are in .pages/[id]/index</div>
    //     <div className="card">
    //       <img src={pet.image_url} />
    //       <h5 className="pet-name">{pet.name}</h5>
    //       <div className="main-content">
    //         <p className="pet-name">{pet.name}</p>
    //         <p className="owner">Owner: {pet.owner_name}</p>

    //         {/* Extra Pet Info: Likes and Dislikes */}
    //         <div className="likes info">
    //           <p className="label">Likes</p>
    //           <ul>
    //             {pet.likes.map((data, index) => (
    //               <li key={index}>{data} </li>
    //             ))}
    //           </ul>
    //         </div>
    //         <div className="dislikes info">
    //           <p className="label">Dislikes</p>
    //           <ul>
    //             {pet.dislikes.map((data, index) => (
    //               <li key={index}>{data} </li>
    //             ))}
    //           </ul>
    //         </div>

    //         <div className="btn-container">
    //           <Link href={`/${pet._id}/edit`}>
    //             <button className="btn edit">Edit</button>
    //           </Link>
    //           <button className="btn delete" onClick={handleDelete}>
    //             Delete
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //     {message && <p>{message}</p>}
    //   </div>
    // </>
  );
};

export const getServerSideProps: GetServerSideProps<Props, Params> = async ({ params, }: GetServerSidePropsContext) => {
  await dbConnect();

  // if (!params?.id) {
  //   return {
  //     notFound: true,
  //   };
  // }
  if (params) {
    // Access the property of params.ID; only if the params object is defined.
    params.id;
  } else {
    return {
      notFound: true,
    };
  }
  // Find product by it's ID
  const productResult = await Product.findById({ _id: params.id });
  if (!productResult) {
    return {
      notFound: true,
    };
  };
  // Selecting the Size field based on gender of the product.  
  const sizeField = productResult.gender === 'Women' ? 'womenSizes' : 'menSizes';
  // Populate the Size model.
  await productResult.populate({ path: 'sizes', model: Size, select: sizeField });

  // const pet = await Pet.findById(params.id).lean();



  const stringifyProduct = JSON.parse(JSON.stringify(productResult));
  /* Ensures all objectIds and nested objectIds are serialized as JSON data */
  // const serializedPet = JSON.parse(JSON.stringify(pet));
  // console.log('==============stringifyProduct', stringifyProduct)




  return {
    props: {
      getProduct: stringifyProduct,
      // username: 'dd'

    },
  };
};

export default PetPage;

