const CartReducer = (state, action) => {
  if (action.type === "Add_To_Cart") {
    let { id, color, amount, product } = action.payload;

    let existingProduct = state.cart.find((elem) => {
      return elem.id === id + color;
    });

    if (existingProduct) {
      let updatedProduct = state.cart.map((elem) => {
        if (elem.id === id + color) {
          let newAmount = elem.amount + amount;
          if (newAmount >= elem.max) {
            newAmount = elem.max;
          }
          return {
            ...elem,
            amount: newAmount,
          };
        } else {
          return elem;
        }
      });

      return {
        ...state,
        cart: [updatedProduct],
      };
    } else {
      let cartProduct;

      cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0],
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  if (action.type === "set_decrease") {
    let updatedProduct = state.cart.map((elem) => {
      if (elem.id === action.payload) {
        let decAmount = elem.amount - 1;

        if (decAmount <= 1) {
          decAmount = 1;
        }
        return {
          ...elem,
          amount: decAmount,
        };
      } else {
        return elem;
      }
    });

    return { ...state, cart: updatedProduct };
  }

  if (action.type === "set_increase") {
    let updatedProduct = state.cart.map((elem) => {
      if (elem.id === action.payload) {
        let incAmount = elem.amount + 1;

        if (incAmount >= elem.max) {
          incAmount = elem.max;
        }
        return {
          ...elem,
          amount: incAmount,
        };
      } else {
        return elem;
      }
    });

    return { ...state, cart: updatedProduct };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter((prod) => {
      return prod.id !== action.payload;
    });

    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "cart_total_item") {
    
    if ((action.payload)?.cart.length === 0) {
      console.log("this 1");
      return {
        ...state,
        total_item: 0,
      };
    } else {
      console.log("not null 1");
      let updatedItemval = (action.payload)?.cart.reduce((accum, currelem) => {
        let { amount } = currelem;
        accum = accum + amount;
        return accum;
      }, 0);

      return {
        ...state,
        total_item: updatedItemval,
      };
    }

    // let updatedItemval = state?.cart.reduce((accum,currelem) => {
    //   let {amount} = currelem;
    //   accum = accum + amount;
    //   return accum;
    // },0)

    // return {
    //   ...state,
    //   total_item : updatedItemval,
    // };
  }

  if (action.type === "cart_total_price") {

    if ((action.payload)?.cart.length === 0) { //this was added beacuse after deploy value of cart was null and then it was first read as null during reduce method and gave error.
      console.log("this 2");
      return {
        ...state,
        total_price: 0,
      };
    } else {
      console.log("not null 2");
       let updatedItemval = (action.payload)?.cart.reduce((accum, currelem) => {
       let { amount, price } = currelem;
       accum = accum + amount * price;
       return accum;
     }, 0);

     return {
         ...state,
         total_price : updatedItemval,
       };
      
    }

    // let updatedItemval = state?.cart.reduce((accum, currelem) => {
    //   let { amount, price } = currelem;
    //   accum = accum + amount * price;
    //   return accum;
    // }, 0);

    // return {
    //   ...state,
    //   total_price : updatedItemval,
    // };
  }

  return state;
};

export default CartReducer;
