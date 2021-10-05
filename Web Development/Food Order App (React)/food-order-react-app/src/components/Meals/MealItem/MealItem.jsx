import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context.js";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    let items = cartCtx.items;
    let sameItemID = items.findIndex((item) => item.id === props.id);
    if (sameItemID > -1) {
      let itemsAmountClone = items[sameItemID].amount;
      //   items.splice(sameItemID,1)
      cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: itemsAmountClone + amount,
        price: props.price,
      },sameItemID);
    } else {
      cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price,
      });
    }

    // console.log(cartCtx.items);
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>

      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
