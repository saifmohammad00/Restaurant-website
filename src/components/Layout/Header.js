import { Fragment } from "react";
import classes from "./Header.module.css";
import mealsimg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onClick}/>
        </header>
        <div className={classes['top-image']}>
            <img src={mealsimg} alt="page header" />
        </div>
        <div className={classes.summary}>
                <h2>Delicious Food, Delivered To You</h2>
                <p>
                    Choose your favorite meal from our broad selection of available meals
                    and enjoy a delicious lunch or dinner at home.
                </p>
                <p>
                    All our meals are cooked with high-quality ingredients, just-in-time and
                    of course by experienced chefs!
                </p>
            </div>
    </Fragment>
}
export default Header;