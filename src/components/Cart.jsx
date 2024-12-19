import { useCartContext } from "../context/cartContext";
import FormatPrice from "../helpers/FormatPrice";
import CartItem from "./CartItem";
import { NavLink } from "react-router-dom";

const Cart = () => {

  const {cart,clearCart,total_price,shipping_fee} = useCartContext();

  // console.log("order",typeof(parseInt(shipping_fee)));

  if(cart.length === 0){
    
    return <div className="text-center h-[400px] bg-green-200">No products</div>
  
  }

  return( 
  <>
    <div className="width-[800px] m-3">
      <div className="grid grid-cols-5 m-1">
        <p>Item</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
        <p>Remove</p>
      </div>
      
      <hr/>

      {console.log("this is cart",cart)}
      
      <div>
      {
        cart.map((elem) => {
          return <CartItem key={elem.id} {...elem}/>
        })
      }
      </div>
      <hr/>

      <div className="flex justify-between w-[85%]">
        <NavLink to="/prodcuts" className="bg-orange-500 p-1 rounded-sm">
          <button>Countinue Shopping</button>
        </NavLink>
        <button onClick={clearCart} className="bg-orange-500 p-1 rounded-sm">Clear Cart</button>
      </div>
    
    <div className="flex justify-end my-1">
      <div className="w-[20%] bg-slate-400 p-1 rounded-md">
        <div className="flex justify-between">
          <p>Subtotal :</p>
          <p><FormatPrice price={total_price}/></p>
        </div>
        <div className="flex justify-between">
          <p>Shipping fee :</p>
          <p><FormatPrice price={parseInt(shipping_fee)}/></p>
        </div>
        <hr/>
        <div className="flex justify-between">
          <p>Order total :</p>
          <p><FormatPrice price={total_price + parseInt(shipping_fee)}/></p>
        </div>
      </div>
    </div>
    </div>
  </>
  );
};

export default Cart;
