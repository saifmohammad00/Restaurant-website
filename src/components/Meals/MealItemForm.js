import { useContext, useRef, useState } from "react";
import classes from "./MealItemForm.module.css"
import CartContext from "../../store/cart-context";
const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountRef = useRef();
    const CartCtx = useContext(CartContext);
    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            setAmountIsValid(false);
            return;
        }
        setAmountIsValid(true);
        CartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: enteredAmountNumber,
            price: props.price,
        });
    };
    return <div className={classes.amount}>
        <form onSubmit={submitHandler}>
            <div className={classes.label}>
                <strong>Amount</strong>
                <input type="number" defaultValue={1} ref={amountRef} min={1} max={5} />
            </div>
            <button type="submit" className={classes.button}>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    </div>
}
export default MealItemForm;