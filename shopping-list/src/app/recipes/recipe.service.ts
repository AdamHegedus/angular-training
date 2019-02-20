import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Array<Recipe> = [
        new Recipe(
            'Test Recipe',
            'Test Description',
            'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'
        ),
        new Recipe(
            'New Recipe',
            'New Description',
            'https://foodrevolution.org/wp-content/uploads/2018/04/blog-featured-diabetes-20180406-1330.jpg'
        )
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}
