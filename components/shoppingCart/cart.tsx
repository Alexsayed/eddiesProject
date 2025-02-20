import { createContext, useState, useEffect } from 'react';
import product, { Products } from "../../models/products";

type Props = {
  getCartItems: any;
};
interface CartItem {
  id: string;
  productName: string;
  price: number;
  productImg: string;
  category: string;
  brand: string;
  gender: string;
  color: string;
  size: string;
  quantity: number;
}
let getTotal = 0;
// const Cart = ({ getCartItems, }: Props,) => {
const Cart = () => {
  // console.log('=========getCartItems', getCartItems)

  // const [storedItems, setStoredItems] = useState<string | null>(null);
  const [storedItems, setStoredItems] = useState<CartItem[]>([]);
  const [checkoutTotal, setTotal] = useState<number>(0);
  // const [storedItems, setStoredItems] = useState<getCartItems>([]);
  // let parsedCartItems1: any = [];
  useEffect(() => {
    //   if (typeof window !== 'undefined' && window.localStorage) {
    //     const getStorage: string | null = localStorage.getItem('items');
    //     if (getStorage) {
    //       try {
    //         const parsedCartItems = JSON.parse(getStorage);
    //         setStoredItems(parsedCartItems);
    //         console.log('===== parsedCartItems', parsedCartItems)

    //       } catch (error) {
    //         console.error('Error parsing stored items from localStorage', error);
    //       }

    //     } else {
    //       console.log('No items found in localStorage');
    //     }


    //   }
    // }, []);

    if (typeof window !== 'undefined' && window.localStorage) {
      const getStorage: string | null = localStorage.getItem('items');
      if (getStorage !== null) {
        console.log('=========if')

        try {
          console.log('=========try')

          // const stringifyCartItems = JSON.stringify(getStorage);
          // console.log('=========stringifyCartItems', stringifyCartItems);
          // parsedCartItems1 = JSON.parse(getStorage);
          const parsedCartItems = JSON.parse(getStorage);
          for (let i = 0; i < parsedCartItems.length; i++) {
            getTotal += parsedCartItems[i].price
            console.log('=========parsedCartItems', typeof parsedCartItems[i].price)
            console.log('=========getTotal', getTotal)
            setTotal(getTotal);
          }
          setStoredItems(parsedCartItems);

          // var parsedCartItems1 = JSON.parse(stringifyCartItems);

          // const parsedCartItems = JSON.parse(JSON.stringify(getStorage));

          //   const parseStringifyBS = JSON.parse(JSON.stringify(bs));
          //   //       console.log('===== parsedCartItems', parsedCartItems)
          //   // return { props: { cartItems: 'ahahah' } };
          //   // setStoredItems(parsedCartItems);


        } catch (error) {
          console.error('Error parsing stored items from localStorage', error);
        }

        //   // } else {
        //   //   console.log('No items found in localStorage');
      }


    }
  }, []);
  console.log('===== storedItems', storedItems)
  // console.log('===== getCartItems', parsedCartItems1[0])
  // getCartItems.map
  if (storedItems === null) {
    return <p>Loading...</p>;
  }
  // next up: continue below
  return (
    <>

      {storedItems?.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <div className=' ' style={{ width: '1200px' }}>
          <div className='h-28 border inline-block' style={{ width: '800px' }}>
            <h1 className='text-2xl'>Shopping Bag</h1>
            <div className=' flex justify-between border-t-2 mt-4' >
              <p className='inline'>Item</p>
              <p className='inline'>Item Price</p>
              <p className='inline'>Quantity</p>
              <p className='inline'>Total Price</p>
            </div>
          </div>
          <div className='inline-block border truncate' style={{ width: '300px', }}>
            Order Summary
            <p>Checkout here </p>
            <p>dddd</p>
            <p>dddd</p>
            <p>Total: {checkoutTotal}</p>
          </div>
          <ul className='inline-block ' style={{ width: '800px' }}>
            {storedItems?.map((item, index) => (

              <li key={index} className='border-b-2 h-48'>
                <div className='flex justify-between '>
                  <div className='inline-block w-1/4'>
                    <img className=' h-48' src={item.productImg} alt="" />
                  </div>
                  <div className='inline-block w-1/6'>
                    <p>Product Name: {item.productName}</p>
                    <p>Brand: {item.brand}</p>
                    <p>Size: {item.size}</p>
                    <div className=''>
                      Color:<p className="w-4 h-4 inline-block ml-2" style={{ background: `${item.color}` }}></p>
                    </div>
                    <p>Gender: {item.gender}</p>
                    <button className='btn'>Remove Item</button>
                  </div>
                  <div className='inline-block w-1/6'>
                    <p>{item.price}</p>
                  </div>
                  <div className='inline-block w-1/6'>
                    <p>{item.quantity}</p>
                  </div>
                  <div className='inline-block w-1/6'>
                    <p>Quantity * Price</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>


        </div>

      )}





    </>
  )
}

// const CartContext = createContext();
// interface CartContextType {
//   addToCart: () => void;
//   // Other properties...
// }
// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     // Load cart items from local storage on component mount
//     const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     setCartItems(storedCartItems);
//   }, []);

//   useEffect(() => {
//     // Save cart items to local storage whenever they change
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   }, [cartItems]);

//   const addToCart = (product) => {
//     setCartItems([...cartItems, product]);
//   };

//   const removeFromCart = (productId) => {
//     setCartItems(cartItems.filter((item) => item.id !== productId));
//   };
//   const clearCart = () => {
//     setCartItems([]);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

export default Cart;