import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { useGlobalvalue } from "./productcontext";
import reducer from "../reducers/filterReducer"
// import filterReducerTwo from "../reducers/filterReducerTwo";

const FilterContext = createContext();

const initialState = {
    
    filter_products : [],
    all_products : [],
    grid_view: false,
    sorting_value:"lowest",
    filter : {
        text : "",
        category:"All",
        company:"All",
        color:"All",
        maxPrice:0,
        price:0,
        minPrice:0,
    }
}

export const FilterContextProvider = ({children})=>{

    const {products} = useGlobalvalue();

    const [state, dispatch] = useReducer(reducer,initialState)
 
    const setGridView = () => {

        return dispatch({type : "set_gridview"});
    }

    const setListView = () => {
        
        return dispatch({type : "set_listview"});
    }

    const sorting = (event) => {

        let userValue = event.target.value;

        return dispatch({type : "get_sort_value", payload: userValue});
    }

    const updateFilterValue = (event) => {
        
        let name = event.target.name;
        let value = event.target.value;
    
        return dispatch({type : "UPDATE_FILTER_VALUE", payload : {name,value}})
    }

    const clearFilter = () => {
        return dispatch({type : "Clear Filter"});
    }

    useEffect(() => {
        dispatch({type : "filter_products"})

        dispatch({type : "sorting_products"})
    
    },[products, state.filter, state.sorting_value])

    useEffect(()=>{ 
        
       if(products.length === 0) return;  //this was sending empty array to filter and usefilterreducer. 
                                          //there the reduce method was iterating on array but being empty it could not process the filter
                                          //and so it was showing error that reading null.
       
       dispatch({type:"load_filter_products", payload : products})

        console.log("this is p",products);
       
       },[products])

    return(
    <FilterContext.Provider value={{...state, setGridView, setListView, sorting, updateFilterValue, clearFilter}}>
        {children}
    </FilterContext.Provider>    
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}