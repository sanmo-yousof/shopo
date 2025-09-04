

import CartItem from "@/components/cartParts/cartItem";
import Discount from "@/components/shopParts/discount";

const Cart = () => {


  return (
    <>
      <div className="">
        <div className="bg-blue-100 w-full h-[180px] flex items-center justify-center">
          <h2 className="sectionHeading">Your Cart</h2>
        </div>
        <CartItem/>
        <Discount />
      </div>
    </>
  );
};

export default Cart;
