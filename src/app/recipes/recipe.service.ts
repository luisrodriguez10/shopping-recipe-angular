import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
// import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
  recipesChanged = new Subject<Recipe[]>();
    // recipeSelected = new EventEmitter<Recipe>();
    // recipeSelected = new Subject<Recipe>();
    // private recipes: Recipe[] = [
    //     new Recipe(
    //         'Tallarines Rojos',
    //         'Italian Dish',
    //         'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg',
    //         [new Ingredient('Meat',1), new Ingredient('French Fries', 20)]),
    //     new Recipe(
    //       'Seco de Cordero',
    //       'Peruvian Dish',
    //       'https://www.piscotrail.com/sf/media/2014/05/seco-de-cordero.jpg',
    //       [new Ingredient('Meat', 1), new Ingredient('Rice', 5)]
    //     ),
    //     new Recipe(
    //       'Lomo Saltado',
    //       'Peruvian Dish',
    //       'https://d33wubrfki0l68.cloudfront.net/0d8efece3c1478eac53966918ff9e28511c5ba90/d0375/images/uploads/2022_07_18_lomo_saltado_0.jpg',
    //       [new Ingredient('Meat', 1), new Ingredient('Potatoes', 5)]
    //     )
    //     ,
    //     new Recipe(
    //       'Chaufa',
    //       'Peruvian Dish',
    //       'https://www.thespruceeats.com/thmb/-cAp_KC9Qv_uD8po6TQbKouKnaM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/arroz-chaufa-chinese-peruvian-fried-rice-3029276-hero-01-ed473a093110410ba4f8342a2b9f2093.jpg',
    //       [new Ingredient('Chicken', 1), new Ingredient('Rice', 5)]
    //     )];

    private recipes: Recipe[] = [];

    constructor(private shoppingListService: ShoppingListService){

    }

    setRecipes(recipes: Recipe[]){
      this.recipes = recipes;
      this.recipesChanged.next(this.recipes.slice());
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

    addRecipe(recipe: Recipe){
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
      this.recipes[index] = newRecipe;
      this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
      this.recipes.splice(index, 1);
      this.recipesChanged.next(this.recipes.slice());
    }
}
