import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredientsChanged = new Subject<Array<Ingredient>>();
    startedEditing = new Subject<number>();

    private ingredients: Array<Ingredient> = [
        new Ingredient('Apple', 5),
        new Ingredient('Pear', 2),
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Array<Ingredient>) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
