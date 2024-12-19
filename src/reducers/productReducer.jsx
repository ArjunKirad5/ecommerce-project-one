const ProductReducer = (state, action) => {
  if (action.type === "SET_LOADING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "API_ERROR") {
    return {
      ...state,
      isLoading: false,
      isError: true,
    };
  } else if (action.type === "SET_API_DATA") {
    
    const featureData = action.payload.filter((curElem) => {
    return curElem.featured === true;
    });

    return {
      ...state,
      isLoading: false,
      products: [action.payload],
      featureProducts: featureData,
    };
  } else if (action.type === "SET_SINGLE_LOADING") {
    return {
      ...state,
      isSingleLoading: true,
    };
  }

  else if (action.type === "SET_SINGLE_PRODUCT") {
    return {
      ...state,
      isSingleLoading: false,
      singleProduct: action.payload,
    };
  }
  else if (action.type === "SET_SINGLE_ERROR") {
    return {
      ...state,
      isSingleLoading: false,
      isError: true,
    };
  }
  else {
    return state;
  }
};

export default ProductReducer;
