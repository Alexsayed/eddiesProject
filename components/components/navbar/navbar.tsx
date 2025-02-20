import React from 'react';
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { mutate } from "swr";
import ProductPage from '../home/product';
import Product, { Products } from "../../models/products";
import Link from "next/link";


// import { count } from "console";
// import { add } from '../home/product';
// import { add } from '../home/product';


import { useCart } from '../../state/CartContext';
import { link } from 'fs';


// var someValue: number;
// export function add(a: number, b: number) {



//   // return a + b;
//   // setCount(a + b);
//   someValue = a + b;
//   console.log('===========someValue', someValue)

//   return someValue;
//   // return count;
// };


// export const useCounter = (initialValue = 0) => {
//   const [count, setCount] = useState(initialValue);
//   console.log('===========useCounter from nav',)

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return { count, increment };
// };
// const someValue;

// const Navbar = ({ valueOfClick }: Props) => {
var getname: string[] = [];

// export function greet(name1: string) {
//   const [count, setCount] = useState('');
//   console.log('===========name', name1)
//   useEffect(() => {
//     setCount(name1);
//   }, [name1]);
//   console.log('===========count', count)

//   // getname.push(name1)
//   // return `Hello00, ${name1}!`;
//   return count;
// }

const Navbar = () => {
  // const Navbar: React.FC = () => {
  const { cart } = useCart();
  const [data, setData] = useState(null);
  // const [count, setCount] = useState('some text');
  // console.log('===========someValue inside', someValue)
  // console.log('===========count inside', count)
  // greet(getname)
  // console.log('===========cart navBar', cart)



  return (

    <>


      {/* <p>Count: {count}</p> */}
      <div className=" w-full h-14 p-4 align-middle inline-block" >
        {/* <span>Cart: {cart.length} items</span> */}

        <div className="inline">menu</div>
        <div className="inline">Project Name</div>
        <div className="inline">Serach</div>

        {/* {cart.length ? (
        ): (
          <div className="float-right h-12">Cart: {cart[5].quantity}</div>
            // <div className='py-5'>
            //   <h1 className='text-3xl'>Create a post in the navigation bar!</h1>
            // </div>
          )} */}
        {cart.length ? (
          <Link href={'shoppingcart'}>
            <div className="float-right h-12">Cart: {cart.length}</div>
          </Link>

          // cart.map((cartItem, index) => (
          //   <Link href={cartItem.id} key={index}>
          //     <div key={index} className=" getCartClassname float-right h-12">
          //       Cart {cartItem.quantity}
          //     </div>
          //   </Link>
          // ))
        ) : (
          <div className=" getCartClassname float-right h-12"> Cart</div>
        )}

      </div>
    </>
  )
}
export default Navbar;