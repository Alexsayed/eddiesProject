import { NextApiRequest, NextApiResponse } from "next";


// import Form from "../components/Form";
import PostProduct from "../components/postProduct/postProduct";
// import HomePage from "../components/home/landingPage";

// import { GetServerSideProps } from "next";
// type Props = {
//   product1: Products;
// };

const NewPet = () => {
  // const data = {} as Products;
  const data = {} as any;
  return (
    // // **********************WORKING ONE *******************
    < PostProduct formId="add-pet-form" product={data} />
  );
};

export default NewPet;
