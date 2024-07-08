
import classes from "./Meals.module.css";
import MealItemForm from "./MealItemForm";

const Meals = () => {
    const MealsList = [
        {
            id: 'm1',
            name: 'Sushi',
            description: 'Finest fish and veggies',
            price: 22.99
        },
        {
            id: 'm2',
            name: 'Schnitzel',
            description: 'A german specialty!',
            price: 16.50
        },
        {
            id: 'm3',
            name: 'Barbecue Burger',
            description: 'American, raw, meaty',
            price: 12.99
        },
        {
            id: 'm4',
            name: 'Green Bowl',
            description: 'Healthy...and green...',
            price: 18.99,
        },
    ];
    const List = MealsList.map((meal) =>
        <div id={meal.id}>
            <section className={classes.box}>
                <div className={classes.section}>
                    <strong>{meal.name}</strong>
                    <div>{meal.description}</div>
                    <strong style={{ color: "#8a2b06" }}>${meal.price}</strong>
                </div>
                <MealItemForm key={meal.id}
                    id={meal.id}
                    name={meal.name}
                    description={meal.description}
                    price={meal.price} />
            </section>
            <hr></hr>
        </div>)
    return <div className={classes.mealsection}>
        {List}
    </div>
}
export default Meals;