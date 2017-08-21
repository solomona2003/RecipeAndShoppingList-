import { Subject } from 'rxjs/Subject';
import { ShoppingListService } from './../../shopping-list/service/shopping-list.service';
import { Ingredient } from './../../shared/model/ingredient.model';
import { Injectable } from '@angular/core';
import { Recipe } from './../recipes-list/model/recipes.model';


@Injectable ()

export class RecipeService {

  recipesChanged = new Subject<Recipe[]> ();
  constructor (private shoppingListService: ShoppingListService) {


  }

// recipeSelected = new EventEmitter <Recipe> ();

private theRecipe: Recipe[] =

  [

   new Recipe('Basic Schnitze',
              'Eat it in Germany',
              'https://goo.gl/yZkZDF',
               [
                 new Ingredient('Meat', 1),
                 new Ingredient ('French Freis', 20)
               ]

              ),

    new Recipe ('Basic Burger',
              'Eat it anywhere',
               'https://goo.gl/r1sdCR',
                 [
                   new Ingredient('Buns', 2),
                   new Ingredient('Meat', 1)
                 ]

                )

  ];


  setRecipes(recipe: Recipe[]) {
  this.theRecipe = recipe;
  this.recipesChanged.next(this.theRecipe.slice());
  }


  getRecipes () {
    return this.theRecipe.slice();
  }

  getRecipe (index: number) {
   return this.theRecipe.slice()[index];
   
   
  }
// from recipe service
 
    addIngredientsToShoppingList (ingredient: Ingredient[]) {

      this.shoppingListService.onAddIngredient(ingredient);

     }

     updateRecipe(index: number, recipe: Recipe) {
       this.theRecipe[index] = recipe;
       this.recipesChanged.next(this.theRecipe.slice());

     }

     addRecipe(recipe: Recipe ) {
        this.theRecipe.push(recipe);
        this.recipesChanged.next(this.theRecipe.slice());
     }

     onDelete(index: number) {
       this.theRecipe.splice(index, 1);
       this.recipesChanged.next(this.theRecipe.slice());

     }

}
