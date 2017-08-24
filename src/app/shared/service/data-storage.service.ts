import { AuthService } from './../../auth/auth.service';
import { Recipe } from './../../recipes/recipes-list/model/recipes.model';
import { RecipeService } from './../../recipes/service/recipe.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,  HttpRequest } from '@angular/common/http';
import 'rxjs/Rx';



@Injectable()

export class DataStorageService {

    constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }

    storeData() {

        // check if there exists a token

        const token = this.authService.getToken();

        // return this.httpClient.put('https://ng-recipe-book-56769.firebaseio.com/recipe.json',
        //     this.recipeService.getRecipes(),
        //     {observe: 'body',
        //     params: new HttpParams().set('auth', token)});


        // tslint:disable-next-line:max-line-length
        const req = new HttpRequest('PUT', 'https://ng-recipe-book-56769.firebaseio.com/recipe.json', this.recipeService.getRecipes() , {params: new HttpParams().set('auth', token), reportProgress: true});

       return  this.httpClient.request(req);

    }


    fetchData() {

        // check if there exists a token

        const token = this.authService.getToken();

        return this.httpClient.get<Recipe[]>('https://ng-recipe-book-56769.firebaseio.com/recipe.json', {
            observe: 'body',
            responseType: 'json',
            params: new HttpParams().set('auth', token)
        }).map(
            (recipes) => {
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
