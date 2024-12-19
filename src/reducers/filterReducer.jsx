const filterReducer = (state,action) => {
    
    switch(action.type){

        case "load_filter_products":

            let priceArr = action.payload.flat().map((item) => { //We have used flat method to reomve all sub array and map method to get list of all the prices
                return item.price;
            });
    
            //1st way to get highest price
            // let maxPrice = priceArr.reduce((initial,current) => {
            //     return Math.max(initial,current); 
            // },0)
    
            //2nd way
            let maxPrice = Math?.max(...priceArr)
            
            console.log("this is max price arr",maxPrice);
    
            return {
                ...state,
                filter_products : [...action.payload],
                all_products : [...action.payload],
                filter:{
                    ...state.filter,
                    maxPrice : maxPrice,
                    price : maxPrice,
                }
            }

        

        case "set_gridview":
        return {
            ...state,
            grid_view: true,
        }

        case "set_listview":
        return {
            ...state,
            grid_view: false,
        }

        case "get_sort_value":
         return {
            ...state,
            sorting_value : action.payload,
        }

        case "sorting_products":
        
        let newSortData;

        const {filter_products} = state;

        let tempSortData = [...filter_products];

        const sortingProducts = (a,b) => {
            
            if (state.sorting_value === "Lowest") {
                return a.price - b.price; 
            }

            if (state.sorting_value === "Highest") {
                return b.price - a.price;
                
            }

            if (state.sorting_value === "a-z"){
                return a.name.localeCompare(b.name);
            }
        
            if (state.sorting_value === "z-a") {

               return b.name.localeCompare(a.name);
            
            }
        }

        
        newSortData = tempSortData.map((data,ind) => {
            
            return data.sort(sortingProducts);
            
        })
        
        return {
            ...state,
            filter_products : newSortData,
        }


        case "UPDATE_FILTER_VALUE":
            
        const {name,value} = action.payload;

        return {
            ...state,

            filter:{
                ...state.filter,
                [name] : value,
            }
        }

        // case "filter_products":

        //     let {all_products} = state;

        //     let tempFilterProducts = [...all_products];

        //     let {text,category,company} = state.filter;

        //     if (text) {

        //         tempFilterProducts = tempFilterProducts.map((item) => {
        //             return item.filter((curelm) => {
        //                 return curelm.name.toLowerCase().includes(text);
        //             })
        //         })
        //     }

        //     if (category !== "All") {

        //         tempFilterProducts = tempFilterProducts.map((item) => {
        //             return item.filter((crl) => {
        //                 return crl.category === category;
        //             })
        //         })
               
        //     }

        //     if (company !== "All") {

        //         tempFilterProducts = tempFilterProducts.map((item) => {
        //             return item.filter((curelm) => {
        //                 return curelm.company === company;
        //             })
        //         })
        //     }

        //     return {
        //         ...state,
    
        //         filter_products : tempFilterProducts,
        //     }
        
        case "filter_products" :

            let {all_products} = state;
            let tempFilterProduct = [...all_products];

            // console.log("this is tempfilter products",tempFilterProduct);

            let {text,category,company,color,price} = state.filter;

            if (text) {

                tempFilterProduct = tempFilterProduct.map((item) => {
                    return item.filter((curl) => {
                        return curl.name.toLowerCase().includes(text);
                    })
                })
            }

            if (category !== "All") {

                tempFilterProduct = tempFilterProduct.map((item) => {
                    return item.filter((curl) => {
                        return curl.category === category;
                    })
                })
            }

            if (company !== "All") {

                tempFilterProduct = tempFilterProduct.map((item) => {
                    return item.filter((curl) => {
                        return curl.company === company;
                    })
                })
            }

            if (color !== "All") {

                tempFilterProduct = tempFilterProduct.map((item) => {
                    return item.filter((curl) => {
                        return curl.colors.includes(color);
                    })
                })
            }

            if (price) {

                tempFilterProduct = tempFilterProduct.map((item) => {
                    return item.filter((curl) => {
                        return curl.price <= price;
                    })
                })
            }

            return {
                ...state,

                filter_products : tempFilterProduct,
            }

            case "Clear Filter" :

             return {
                ...state,
                filter : {
                    ...state.filter,
                    text : "",
                    category:"All",
                    company:"All",
                    color:"All",
                    maxPrice: state.filter.maxPrice,
                    price:state.filter.maxPrice,
                    minPrice:0,
                }
             }

        
            default:
            return state;
    }
}

export default filterReducer;