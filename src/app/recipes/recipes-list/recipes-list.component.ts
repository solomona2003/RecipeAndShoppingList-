import { Subscription } from 'rxjs/Subscription';
import { RecipeService } from './../service/recipe.service';
import { Recipe } from './model/recipes.model';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {

@Output () recipeWasSelected = new EventEmitter <Recipe> ();
killsubscription = new Subscription;

theRecipe: Recipe[];
// theRecipe: Recipe[] = [

//     new Recipe('A Test Recipe 1',
//     'The description is that it is a good Recipe 1',
//     'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'),

//     new Recipe ('A Test Recipe 2', 'The description is that it is a good Recipe 2',
//     'http://www.seriouseats.com/recipes/assets_c/2016/03/20160324-aquafaba-pancake-oatmeal-vegan-21-thumb-1500xauto-430826.jpg')


//   ];


  // onRecipeSelected (recipe: Recipe) {
  //  this.recipeWasSelected.emit(recipe);

  // }

  constructor(private recipeService: RecipeService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.killsubscription = this.recipeService.recipesChanged.subscribe(
      (recipe: Recipe[]) => {
        this.theRecipe = recipe;

      }
    );
    this.theRecipe = this.recipeService.getRecipes();
    }

    onNewRecipe() {
      this.router.navigate (['new'], {relativeTo: this.activatedRoute});
    }

    ngOnDestroy () {
      this.killsubscription.unsubscribe();
    }

}
