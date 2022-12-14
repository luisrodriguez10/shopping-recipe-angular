import { EventEmitter, Injectable } from "@angular/core";
// import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    // recipeSelected = new EventEmitter<Recipe>();
    // recipeSelected = new Subject<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'Tallarines Rojos',
            'Italian Dish',
            'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg',
            [new Ingredient('Meat',1), new Ingredient('French Fries', 20)])
    ];

    constructor(private shoppingListService: ShoppingListService){

    }

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
      return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}
