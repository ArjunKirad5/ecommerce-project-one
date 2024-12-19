import { createContext,useContext,useEffect,useReducer } from "react";
import reducer from "../reducers/cartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem('thapcart');
    
    if(localCartData == []) {
        return [];
    }
    else {
        return JSON.parse(localCartData);
    }
}


const initialState = {
    cart : getLocalCartData(),
    total_item : "",
    total_price : "",
    shipping_fee : '50000',
};

const CartProvider =({children}) => {

    const [state,dispatch] = useReducer(reducer,initialState)

    const addTocart = (id,color,amount,product) => {
        return dispatch({type : "Add_To_Cart", payload : {id,color,amount,product}})
    }

    const removeItem = (id) => {
        console.log("id function",id);
        return dispatch({type :"REMOVE_ITEM", payload : id});
    }

    const setIncrease = (id) => {
        dispatch({type : "set_increase", payload:id})
    }

    const setDecrease = (id) => {
        dispatch({type : "set_decrease", payload:id})
    }

    const clearCart = () => {
        return dispatch({type : "CLEAR_CART"})
    }

    useEffect(() => { //error here. Check how to conditional exectuion of an action within useeffect.

     dispatch({type : "cart_total_item",payload:state}); //here there is error. try adding payloadas state and while cal value use value from action.payload.
        
     dispatch({type : "cart_total_price",payload:state});
        
    localStorage.setItem("thapcart",JSON.stringify(state.cart))
    
    },[state.cart])

    return <CartContext.Provider value={{...state, addTocart, removeItem,clearCart,setDecrease,setIncrease}}>{children}</CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext);
}
export {CartProvider,useCartContext};