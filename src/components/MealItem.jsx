import Button from "../UI/Button";
import { currencyFormatter } from "../util/formatting";

function MealItem({ meal }) {
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
          <p className="meal-item-actions">
            <Button>Add to Cart</Button>
          </p>
        </div>
      </article>
    </li>
  );
}

export default MealItem;
