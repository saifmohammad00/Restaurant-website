import { Fragment } from "react";
import classes from "./Header.module.css";
import mealsimg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = () => {
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['top-image']}>
            <img src={mealsimg} alt="page header" />
        </div>
    </Fragment>
}
export default Header;