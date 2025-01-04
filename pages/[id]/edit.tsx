import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import useSWR from "swr";
import Form from "../../components/Form";
import EditForm from "../../components/editProduct/editForm";
import React from 'react';
// import { useParams } from 'next/navigation';
import dbConnect from "../../lib/dbConnect";
import Product, { Products } from "../../models/products";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
// import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

interface Params extends ParsedUrlQuery {
  id: string;
}
type Props = {
  // productId is assigned below. with the help of (ParsedUrlQuery) we get params id.
  // productId: string;
  getProduct: Products;
};

// **************************************** Original *************************
// const fetcher = (url: string) =>
//   fetch(url)
//     .then((res) => res.json())
//     .then((json) => json.data);
// **************************************** Original *************************
// productId comes from line: 17 and line: 17 gets the params id from returned value at the bottom.
// const EditPet = ({ productId }: Props) => {
// **************************************** Original *************************

const EditPet = ({ getProduct }: Props) => {


  // **************************************** ON HOLD *************************
  // const [getProducts, setProduct] = useState<any>({});
  // For us to edit a product, we need to fitch (retrieve) by it's ID. 
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     // Fitch data by it's ID from below URL            
  //     const response = await fetch('http://localhost:3000/api/products/' + productId);
  //     const data = await response.json();
  //     setProduct(data.data);
  //   }
  //   fetchUsers();
  // }, []);
  // **************************************** ON HOLD *************************


  console.log('==============getProduct', getProduct)



  // **************************************** Original *************************
  // fetcher("http://localhost:3000/api/pets/67546b2b96eb63212a35d4d2");
  // const { data: pet, error, isLoading, } = useSWR(id ? `/api/pets/${id}` : null, fetcher);
  // const { data: getProducts, error, isLoading, } = useSWR(id ? `http://localhost:3000/api/pets/67546b2b96eb63212a35d4d2` : null, fetcher);


  // if (error) return <p>Failed to load</p>;
  // if (isLoading) return <p>Loading...</p>;
  // if (!pet) return null;

  // const petForm = {
  //   name: pet.name,
  //   owner_name: pet.owner_name,
  //   species: pet.species,
  //   age: pet.age,
  //   poddy_trained: pet.poddy_trained,
  //   diet: pet.diet,
  //   image_url: pet.image_url,
  //   likes: pet.likes,
  //   dislikes: pet.dislikes,
  // };
  // return <Form formId="edit-pet-form" petForm={petForm} forNewPet={false} />;
  // **************************************** Original *************************  
  // next up:  create link to all products so we can pick whichever we want to update
  return (
    // Pass the data(getProducts) to components/editproduct/EditForm, which it has a fuction with 2 arg ( function editProduct({ formId1, product }) )  
    // <EditForm editFormId="edit-pet-form1" product={getProducts} />
    <EditForm editFormId="edit-pet-form1" product={getProduct} />
  )
};
// 
// export const getServerSideProps: GetServerSideProps<Props> = async () => {

export const getServerSideProps: GetServerSideProps<Props, Params> = async ({ params, }: GetServerSidePropsContext) => {
  await dbConnect();

  if (params) {
    // Access the property of params.ID; only if the params object is defined.
    params.id;
  } else {
    return {
      notFound: true,
    };
  }
  const productResult = await Product.findById({ _id: params.id });
  const stringifyProduct = JSON.parse(JSON.stringify(productResult));

  // const paramsId = JSON.parse(JSON.stringify(params.id));
  return {
    props: {
      // assign paramsId to productId, which is defind at the top of our code. line: 21
      // productId: paramsId,
      // assign stringifyProduct to getProduct, which is defind at the top of our code. line: 22
      getProduct: stringifyProduct,
    },
  };
};

export default EditPet;
