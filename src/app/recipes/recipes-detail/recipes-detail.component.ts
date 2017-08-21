import { AuthService } from './../../auth/auth.service';
import { Ingredient } from './../../shared/model/ingredient.model';
import { ShoppingListService } from './../../shopping-list/service/shopping-list.service';
import { ShoppingListComponent } from './../../shopping-list/shopping-list.component';
import { RecipeService } from './../service/recipe.service';
import { Recipe } from './../recipes-list/model/recipes.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  
  // @Input() recipeD: Recipe;
  recipeD: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private shoppingListService: ShoppingListService,
    private activatedRoute: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipeD = this.recipeService.getRecipe(this.id);

      }
    );
  }

   // this is alternative 1
  // onAddToShoppingList() { 

  //   this.shoppingListService.onAddIngredeint (this.recipeD.ingredient);

  // }


  // this is alternative 2

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipeD.ingredient);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute});
    // alternatively
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.activatedRoute});

  }

  onDelete() {
    this.recipeService.onDelete(this.id);
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

}
