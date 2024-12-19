import { FaMinus,FaPlus } from "react-icons/fa";


const CartAmountToggle = ({amount,setIncrease,setDecrease}) => {
    return (
        <>
    <div className="flex gap-1 my-2">
        <button onClick={setDecrease}><FaMinus/></button>
        <div className="bg-gray-500 px-2 text-white rounded-[4px]">{amount}</div>
        <button onClick={setIncrease}><FaPlus/></button>
    </div>
        </>
    )
}

export default CartAmountToggle;