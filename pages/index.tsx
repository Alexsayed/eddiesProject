import Link from "next/link";
import { useState, useEffect } from "react";
import dbConnect from "../lib/dbConnect";
// import Pet, { Pets } from "../models/Pet";
import Pet, { Users } from "../models/Users";
// import User from "../models/Users";
import Product, { Products } from "../models/products";
import { GetServerSideProps } from "next";
import HomePage from "../components/home/landingPage";


// type Props = {
//   pets: Pets[];
// };

// type Props = {
//   pets: Users[];
// };
type Props = {
  allProducts: Products[];
  // products1: String;
};


// const Index = ({ pets }: Props) => {
const Index = ({ allProducts }: Props) => {
  // const [getProducts1, setProduct1] = useState<any>({});
  // useEffect(() => {
  //   setProduct1(products1)
  // })
  // const data = {} as any;

  // console.log('=============, products1 index', allProducts)
  return (


    <>
      < HomePage getAllProducts={allProducts} />
      {/* <div>ddjdjdjfffff</div> */}
      {/* {pets.map((pet) => (
        <div key={pet._id} >
          <div className="card">
            <img src={pet.image_url} />
            <h5 className="pet-name">{pet.name}</h5>
            <div className="main-content">
              <p className="pet-name">{pet.name}</p>
              <p className="owner">Owner: {pet.owner_name}</p>

              Extra Pet Info: Likes and Dislikes
              <div className="likes info">
                <p className="label">Likes</p>
                <ul>
                  {pet.likes.map((data, index) => (
                    <li key={index}>{data} </li>
                  ))}
                </ul>
              </div>
              <div className="dislikes info">
                <p className="label">Dislikes</p>
                <ul>
                  {pet.dislikes.map((data, index) => (
                    <li key={index}>{data} </li>
                  ))}
                </ul>
              </div>

              <div className="btn-container">
                <Link href={{ pathname: "/[id]/edit", query: { id: pet._id } }}>
                  <button className="btn edit">Edit</button>
                </Link>
                <Link href={{ pathname: "/[id]", query: { id: pet._id } }}>
                  <button className="btn view">View</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))} */}
    </>
  )
};

/* Retrieves pet(s) data from mongodb database */
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  await dbConnect();

  /* find all the data in our database */
  // const result = await Pet.find({});
  const productsResult = await Product.find({});
  // console.log('=========productsResult', productsResult)
  const stringifyAllProduct = JSON.parse(JSON.stringify(productsResult));

  /* Ensures all objectIds and nested objectIds are serialized as JSON data */
  // const pets = result.map((doc) => {
  // const products2 = productsResult.map((doc) => {
  //   // const pet = JSON.parse(JSON.stringify(doc));
  //   const product3 = JSON.parse(JSON.stringify(doc));

  //   // return pet;
  //   return product3;
  // });
  // return { props: { pets: pets } };
  // return { props: { products1: products2 } };
  return { props: { allProducts: stringifyAllProduct } };

};

export default Index;
