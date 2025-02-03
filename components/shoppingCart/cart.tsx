import { createContext, useState, useEffect } from 'react';
type Props = {
  getCartItems: any;
};

const Cart = ({ getCartItems, }: Props,) => {
  const [storedItems, setStoredItems] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const getStorage = localStorage.getItem('items');
      setStoredItems(getStorage);
      console.log('===== items from LoaclStorge', getStorage)
    }
  }, []);
  return (
    <>
      <p>HHH: {storedItems}</p>
      <p>We are inside Shopping Cart</p>
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