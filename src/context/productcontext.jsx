import { createContext, useContext, useEffect, useReducer } from "react";
import ProductReducer from "../reducers/productReducer";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const API = "https://api.pujakaitem.com/api/products";

  const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts:[],
    isSingleLoading:false,
    singleProduct : {}
  };
  
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProducts = async (x) => {
    dispatch({type : "SET_LOADING"})

    try {
      
      const res = await fetch(x);
      
      const products = await res.json();
      
      // console.log(products);
      
      dispatch({ type: "SET_API_DATA", payload: products });
    
    } catch (error) {
      
      dispatch({ type: "API_ERROR"});  
    
    }
  };

  //Second api call for selected product

  const getSingleProduct = async (url) => {
    
    dispatch({type:"SET_SINGLE_LOADING"})

    try {
      const res = await fetch(url);
      const SingleProduct = await res.json();
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: SingleProduct});
    
    } catch (error) {
      
      dispatch({ type: "SET_SINGLE_ERROR"});
    
    }
  };

  useEffect(() => {
    
    getProducts(API);
  
  }, []);

  return (
    <>
      <AppContext.Provider value={{ ...state, getSingleProduct }}>{children}</AppContext.Provider>
    </>
  );
};

const useGlobalvalue = () => {
  //This is global hook
  return useContext(AppContext);
};


export { AppProvider, AppContext, useGlobalvalue};
