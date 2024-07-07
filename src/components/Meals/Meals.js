
import classes from "./Meals.module.css";

const Meals = () => {
    const MealsList = [
        {
            id: 'm1',
            name: 'Sushi',
            description: 'Finest fish and veggies',
            price: "$22.99",
        },
        {
            id: 'm2',
            name: 'Schnitzel',
            description: 'A german specialty!',
            price: "$16.50",
        },
        {
            id: 'm3',
            name: 'Barbecue Burger',
            description: 'American, raw, meaty',
            price: "$12.99"
        },
        {
            id: 'm4',
            name: 'Green Bowl',
            description: 'Healthy...and green...',
            price: "$18.99",
        },
    ];
    const SubmitHandler = (event) => {
        event.preventDefault();
        
    }
    const List = MealsList.map((meal) =>
        <div id={meal.id}>
            <section className={classes.box}>
                <div className={classes.section}>
                    <strong>{meal.name}</strong>
                    <div>{meal.description}</div>
                    <strong style={{ color: "#8a2b06" }}>{meal.price}</strong>
                </div>
                <div className={classes.amount}>
                    <form onSubmit={SubmitHandler} data={meal}>
                        <div className={classes.label}>
                            <strong>Amount</strong>
                            <input type="number" defaultValue={0} name="noofItems"/>
                        </div>
                        <button type="submit" className={classes.button}>+ Add</button>
                    </form>
                </div>
            </section>
            <hr></hr>
        </div>)
    return <div className={classes.mealsection}>
        {List}
    </div>
}
export default Meals;