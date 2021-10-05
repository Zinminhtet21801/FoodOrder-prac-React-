import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnIsBumped, setBtnIsBumped] = useState(false)
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  useEffect(()=>{
    if(numberOfCartItems === 0){
      return
    }
    setBtnIsBumped(true)
    const timer = setTimeout(()=>{
      setBtnIsBumped(false)
    },300)

    return ()=>{
      clearTimeout(timer)
    }
  },
  [numberOfCartItems])
  


  const btnClasses = `${classes.button} ${btnIsBumped ? classes.bump : ""}`

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;