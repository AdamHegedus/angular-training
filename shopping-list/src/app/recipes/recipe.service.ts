import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Array<Recipe> = [
        new Recipe(
            'Test Recipe',
            'Test Description',
            'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]
        ),
        new Recipe(
            'New Recipe',
            'New Description',
            'https://foodrevolution.org/wp-content/uploads/2018/04/blog-featured-diabetes-20180406-1330.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Salad', 1),
                new Ingredient('Meat', 2),
                new Ingredient('French Fries', 20)
            ]
        )
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}
