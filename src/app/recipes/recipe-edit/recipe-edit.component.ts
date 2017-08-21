import { Recipe } from './../recipes-list/model/recipes.model';
import { Ingredient } from './../../shared/model/ingredient.model';
import { RecipeService } from './../service/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
id: number;
editMode = false;

recipeForm: FormGroup;

constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService,
 private router: Router) { }

  ngOnInit() {
this.activatedRoute.params.subscribe(
(params: Params) => {
this.id = +params['id'];                // check if the route is recipes/id/edit or only recipes/new
this.editMode = params['id'] != null;  // if it has an id edit mode is true
this.initForm();
console.log(this.editMode);

}
);

  }

  onSubmit() {
    const newRecipe =  new Recipe(
    this.recipeForm.value['name'],
    this.recipeForm.value['description'],
    this.recipeForm.value['imagePath'],
    this.recipeForm.value['ingredients'] );

    if (this.editMode) {

      this.recipeService.updateRecipe(this.id, newRecipe);
    } else {
      this.recipeService.addRecipe(newRecipe);
    }

    this.onCancel();
  }

  private initForm () {

    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';

    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;

      if (recipe['ingredient']) {
        for (let x of recipe.ingredient) {
          recipeIngredients.push(
            new FormGroup ({
              'name': new FormControl (x.name, Validators.required),
              'amount': new FormControl(x.amount, [Validators.required, Validators.pattern(/^[0-9]{1,9}$/)])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl (recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl (recipeDescription, Validators.required),
      'ingredients': recipeIngredients
  });
  }

  // reason why reactive is used, dynamic form element creation

  onAddIngredient() {
      (<FormArray>this.recipeForm.get('ingredients')).push(
        new FormGroup({
          'name': new FormControl(null, Validators.required),
          'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{1,9}$/)])
        })
      );
  }


  onClear() {

    this.recipeForm.reset();

  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});

  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);

  }

}
