import "../css/style.css";
import "../css/form.css";
import { useState } from 'react';
import { useEffect } from 'react';
import Head from "next/head";
import Link from "next/link";
import type { AppProps } from "next/app";
import dbConnect from "../lib/dbConnect";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import HomePage from "../components/home/landingPage";
import User from "../models/Users";
import PostProduct from "../components/postProduct/postProduct";

// console.log('=====AppProps1', typeof { AppProps });
// console.log('=====Footer', Footer);

// async function getData() {
//   const res = await fetch('http://localhost:3000/api/pets', {
//     cache: 'no-store'
//   });
//   return res.json()

// }


// next up: create components and call them here
function MyApp({ Component, pageProps }: AppProps) {
  // console.log('=====Component from --app.tsx', Component)
  // console.log('=====pageProps  --app.tsx', pageProps)


  // dbConnect();
  // console.log('=====User', User);
  // const data1 = getData();
  // console.log('=============data', data1) 

  // ****************** Start here **************
  // const [Listing, setListing] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('http://localhost:3000/api/pets');
  //     console.log('=============response', response)

  //     const json = await response.json();
  //     console.log('=============json', json)

  //     setListing(json.data);
  //   };

  //   fetchData();
  // }, []);

  // console.log('=============Listing', Listing)
  // ****************** end here **************



  return (

    <>
      <Head>
        <title>Pet Care App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Navbar />
      {/* <HomePage /> */}
      <div className="top-bar">
        <div className="nav">
          <Link href="/">Homeeee</Link>
          <Link href="/new">Add Pet</Link>
        </div>

        <img
          id="title"
          src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Pet_logo_with_flowers.png"
          alt="pet care logo"
        ></img>
      </div>
      <div className="wrapper grid"> pageProps
        <Component {...pageProps} />

      </div>
      <Footer />
    </>
  );


}
export default MyApp;
