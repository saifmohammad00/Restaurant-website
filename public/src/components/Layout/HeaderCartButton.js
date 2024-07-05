import { Fragment } from "react"
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
const HeaderCartButton = () => {
    return <Fragment>
        <button className={classes.button}>
            <span className={classes.cart}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>0</span>
        </button>
    </Fragment>
}
export default HeaderCartButton;