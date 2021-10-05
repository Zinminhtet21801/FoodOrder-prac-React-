import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      if (action.item.length === 1) {
        const updatedItems = state.items.concat(action.item[0]);
        const updatedTotalAmount =
          parseFloat(state.totalAmount) +
          parseFloat(action.item[0].price) * parseInt(action.item[0].amount);
        return { items: updatedItems, totalAmount: updatedTotalAmount };
      } else {
        let prevItem = state.items;
        prevItem[action.item[1]] = action.item[0];
        const updatedItems = prevItem;
        // const oldTotalAmount = parseFloat(state.totalAmount) - parseFloat(action.item[0].price) * (parseInt(state.items[action.item[1]].amount-1));
        const updatedTotalAmount =
          parseFloat(state.totalAmount) +
          parseFloat(action.item[0].price) *
            parseInt(
              action.item[0].amount -
                parseInt(state.items[action.item[1]].amount - 1)
            );
        // console.log(state.items[action.item[1]].amount + " " + action.item[0].amount + " "+oldTotalAmount + " "+updatedTotalAmount);
        return { items: updatedItems, totalAmount: updatedTotalAmount };
      }
    }
    case "REMOVE": {
      let prevItem = state.items;
      prevItem[action.item[1]] = action.item[0];
      const updatedItems = prevItem;
      // const oldTotalAmount = parseFloat(state.totalAmount) - parseFloat(action.item[0].price) * (parseInt(state.items[action.item[1]].amount-1));
      const updatedTotalAmount =
        parseFloat(state.totalAmount) -
        parseFloat(action.item[0].price) *
          parseInt(action.item[0].amount - parseInt(action.item[0].amount - 1));
      // console.log(state.items[action.item[1]].amount + " " + action.item[0].amount + " "+oldTotalAmount + " "+updatedTotalAmount);
      return { items: updatedItems, totalAmount: updatedTotalAmount };
    }
    case "CLEAR":
      return defaultCartState;
    default:
      return defaultCartState;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (...item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemToCartHandler = (...item) => {
    dispatchCartAction({ type: "REMOVE", item: item });
  };

  const clearCartHandler = () =>{
    dispatchCartAction({type : "CLEAR"})
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    clearCart : clearCartHandler
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
