import ReactDom from "react-dom";
import classes from "./Cart.module.css"
import { Fragment } from "react";
const Item=(props)=>{
    return <div className={classes.cart}>
        <p>Sushi</p>
        <div>
            <strong>Total Amount</strong>
            <span><strong>35.62</strong></span>
        </div>
        <div className={classes.buttons}>
            <button className={classes.button1} onClick={props.onClose}>Close</button>
            <button className={classes.button2}>Order</button>
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