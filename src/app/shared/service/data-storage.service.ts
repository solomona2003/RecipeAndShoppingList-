import { AuthService } from './../../auth/auth.service';
import { Recipe } from './../../recipes/recipes-list/model/recipes.model';
import { RecipeService } from './../../recipes/service/recipe.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';



@Injectable ()

export class DataStorageService {

    constructor (private http: Http, private recipeService: RecipeService, private authService: AuthService) {}

    storeData() {

        // check if there exists a token

        const token = this.authService.getToken();

        return this.http.put('https://ng-recipe-book-56769.firebaseio.com/recipe.json?auth=' + token,
        this.recipeService.getRecipes());
    }


    fetchData () {

        // check if there exists a token

        const token = this.authService.getToken();

        return this.http.get('https://ng-recipe-book-56769.firebaseio.com/recipe.json?auth=' + token).map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                for (const recipe of recipes) {
                    if (!recipe['ingredient']) {
                        recipe['ingredient'] = [];
                    }
                }
                return recipes;
            }).
        subscribe(
            (recipe: Recipe[]) => {

                this.recipeService.setRecipes(recipe);
                console.log(recipe);

            }
        );
}
}
