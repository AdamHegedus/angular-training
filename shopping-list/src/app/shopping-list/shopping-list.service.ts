import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    private ingredients: Array<Ingredient> = [
        new Ingredient('Apple', 5),
        new Ingredient('Pear', 2),
    ];

    getIngredients() {
        return this.ingredients.slice();
    }
}
