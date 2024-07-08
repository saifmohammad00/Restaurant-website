import ReactDom from "react-dom";
import classes from "./Cart.module.css"
import { Fragment,useContext } from "react";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

const Item=(props)=>{
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
    return <div className={classes.cart}>
        {cartItems}
        <div>
            <strong>Total Amount</strong>
            <span><strong>{totalAmount}</strong></span>
        </div>
        <div className={classes.buttons}>
            <button className={classes.button1} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button2}>Order</button>}
        </div>
        </div>
}

const Cart=(props)=>{
     const location=document.getElementById("overlays");
     return <Fragment>
              {ReactDom.createPortal(<div className={classes.overlay} onClick={props.onClose}></div>, location)}
              {ReactDom.createPortal(<Item onClose={props.onClose}/>, location)}
            </Fragment>
}
export default Cart;