import Cart from "../components/shoppingCart/cart";
type Props = {
  cartItems: any
  // sizes:
  // products1: String;

};

const shoppingcart = ({ cartItems }: Props) => {
  return (
    <>
      < Cart getCartItems={cartItems} />
    </>
  )

}
export default shoppingcart; 
