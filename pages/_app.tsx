import React from 'react';
import "../css/style.css";
import "../css/form.css";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useContext } from 'react';
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
import { CartProvider } from '../state/CartContext'
import Product, { Products } from "../models/products";
import Size, { ISizes } from '../models/sizes';
import { BsPen, BsTrash } from "react-icons/bs";
import Cart from "../components/shoppingCart/cart";
import { useRouter } from 'next/router';
import { SessionProvider } from 'next-auth/react';

// console.log('=====AppProps1', AppProps);
// console.log('=====Footer', Footer);

// async function getData() {
//   const res = await fetch('http://localhost:3000/api/pets', {
//     cache: 'no-store'
//   });
//   return res.json()

// }


// next up: create components and call them here
function MyApp({ Component, pageProps }: AppProps) {
  // const router = useRouter();
  // console.log('=====Component from --app.tsx', Component)
  // console.log('=====pageProps  --app.tsx', pageProps)
  // console.log('=====AppProps  --app.tsx', AppProps.pageProps)

  // const [count, setCount] = useState('some text');
  // console.log('===========someValue inside', someValue)
  // console.log('===========count inside', count)

  // const updateCount = (newCount: any) => {
  //   console.log('===========newCount', newCount)

  //   setCount(newCount);
  // }

  // useEffect(() => {

  // const productsResult = await Product.find({}).populate({ path: 'sizes', model: Size }).exec();

  // console.log('=====productsResult from app', productsResult);
  // }, []);
  // const data1 = getData();


  // ****************** Start here **************
  // const [Listing, setListing] = useState<Products[]>([]);

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
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('http://localhost:3000/api/products');
  //     // console.log('=============response', response)

  //     const json = await response.json();
  //     // console.log('=============json', json)

  //     setListing(json.data);
  //   };

  //   fetchData();
  // }, []);

  // console.log('=============Listing', Listing)
  // ****************** end here **************
  // next up: index.tsx is working but the problem is(navbar) no a good idea declaring navBar from index.tsx we need to fin d the way to send data to
  // < Component {...pageProps} /> the searchQuery
  // const hasRedirected = React.useRef(false);
  // let filteredResults: Products[] = [];
  // const [searchQuery, setSearchQuery] = useState<string>('');
  // const handleSearch = (query: string) => {
  //   console.log('=============Listing search', Listing)

  //   // console.log('=======handleSearch HIT ot zhope', query)
  //   setSearchQuery(query);

  // };
  // next up: create search.tsx so we can redirect to there
  // useEffect(() => {
  // if (searchQuery.length > 0 && !hasRedirected.current) {

  //   filteredResults = Listing.filter(item => item.productName.toLowerCase().includes(searchQuery.toLocaleLowerCase()));

  //   // we use hasRedirected ref. to make sure the useEffect is NOT lopping infinitly.
  //   hasRedirected.current = true;
  //   console.log('========= if searchQuery app', searchQuery);
  //   console.log('========= if searchQuery app filteredResults', filteredResults);
  //   router.push('/shoppingcart');
  // } else {
  //   console.log('========= Else searchQuery app', searchQuery);

  // }
  // }, [searchQuery, router]);
  // console.log('=======handleSearch searchQuery ot zhope outside', searchQuery)
  // useEffect(() => {
  // if (searchQuery.length > 0) {
  //   filteredResults = Listing.filter(item => item.productName.toLowerCase().includes(searchQuery.toLocaleLowerCase()));

  //   router.push('/shoppingcart');  // Redirect to /search if searchQuery is not empty
  // }
  // console.log('=======useEffect for reroute', searchQuery)

  // }, [searchQuery, router]);

  return (

    <>
      <SessionProvider session={pageProps.session}>
        <Head>
          <title>Pet Care App</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        <CartProvider>

          <Navbar />



          {/* <HomePage /> */}
          {/* <div className="top-bar">
          <div className="nav">
            <Link href="/">Homeeee</Link>
            <Link href="/new">Add Pet</Link>
          </div>

          <img
            id="title"
            src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Pet_logo_with_flowers.png"
            alt="pet care logo"
          ></img>
        </div> */}
          <div className="wrapper grid w-full">
            <p>pageProps.session: {pageProps.session}</p>
            {/* <SessionProvider session={pageProps.session}> */}
            <Component {...pageProps} />
            {/* </SessionProvider> */}
            {/* <Component {...pageProps} /> */}
          </div>
        </CartProvider >

        <Footer />
      </SessionProvider>
    </>
  );


}
export default MyApp;
