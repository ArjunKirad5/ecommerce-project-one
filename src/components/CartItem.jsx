import { FaTrash } from "react-icons/fa";
import FormatPrice from "../helpers/FormatPrice"
import CartAmountToggle from "./CartAmountToggle";
import { useCartContext } from "../context/cartContext";

const CartItem = ({ id, name, image, amount, color, price }) => {

    const {removeItem,setDecrease,setIncrease} = useCartContext();

    // const setDecrease = () => {
    //     // if (amount === 0 || amount === 1) {
    //     //   setamount(1);
    //     // } else {
    //     // setamount(amount - 1)
    //     }
    //   }
    
    //   const setIncrease = () => {
    //     // if (amount >= stock) {
    //     //   setamount(stock)
    //     // } else {
    //     //   setamount(amount + 1)
    //     // }
    //   }


    return (
    <div className="grid grid-cols-5 m-1">
      <div className="flex w-[200px]">
        <div>
          <figure className="w-[70px]">
            <img src={image.url} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="flex w-[90px]">
            <p>color :</p>
            <div style={{backgroundColor:color}} className="w-[25px] h-[25px]"></div>
          </div>
        </div>


      </div>

      <div>
        <p>
        <FormatPrice price={price}/>
        </p>
      </div>

      <div>
        <CartAmountToggle amount={amount} setIncrease={() => setIncrease(id)} setDecrease={() => setDecrease(id)}/>
      </div>

      <div>
        <p><FormatPrice price={price * amount}/></p>
      </div>

      <div>
        {/* <p>{id}</p> */}
        <FaTrash onClick={() => removeItem(id)}/>
      </div>
    </div>
  );
};

export default CartItem;
