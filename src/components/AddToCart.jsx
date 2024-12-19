import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import { useCartContext } from "../context/cartContext";

const AddToCart = ({product}) => {
    
    const {addTocart} = useCartContext();

    const {id,colors,stock} = product;

    const [amount,setamount] = useState(1);
    
    const [color,setcolor] = useState(colors[0])

    const setDecrease = () => {
        if (amount === 0 || amount === 1) {
          setamount(1);
        } else {
        setamount(amount - 1)
        }
      }
    
      const setIncrease = () => {
        if (amount >= stock) {
          setamount(stock)
        } else {
          setamount(amount + 1)
        }
      }
    
    return(
    <>
    <div>
        <p className="p-1 flex items-center">
        
            {colors.map((Currcolor,indx) => {
                return <button style={{backgroundColor:Currcolor,borderRadius:"5px",marginLeft:"3px",marginRight:"3px"}}
                 key={indx}
                 className={color === Currcolor ? "border-red-700 h-[30px] w-[30px] border-4 p-1" : "h-[25px] w-[25px] p-1"}
                 onClick={() => {setcolor(Currcolor)}}
                 >
                    {color === Currcolor ? <FaCheck/> : null}
                </button>
            })}
        
        </p>

        <CartAmountToggle 
            amount={amount}
            setDecrease={setDecrease}
            setIncrease={setIncrease}
            />

            <NavLink to='/cart' onClick={() => {addTocart(id,color,amount,product)}}>
              <button className="bg-white font-semibold text-black p-1 rounded-md h-[30px]">Add To Cart</button>
            </NavLink>
    
    </div>
    
    </>
    )
}

export default AddToCart;