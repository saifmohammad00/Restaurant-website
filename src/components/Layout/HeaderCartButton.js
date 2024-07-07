import { Fragment,useContext } from "react"
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
    const CartCtx=useContext(CartContext);
    const NumberOfCartItems=CartCtx.items.reduce((CurrNum,Items)=>{
        return CurrNum+Items.amount;
    },0)
    return <Fragment>
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.cart}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{NumberOfCartItems}</span>
        </button>
    </Fragment>
}
export default HeaderCartButton;