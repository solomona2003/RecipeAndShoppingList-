import { SharedModule } from './../shared/shared.module';
import { RecipesRoutingMudule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesLandComponent } from './recipes-land/recipes-land.component';
import { RecipesItemComponent } from './recipes-list/recipes-item/recipes-item.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [RecipeEditComponent,
        RecipesDetailComponent,
        RecipesItemComponent,
        RecipesLandComponent,
        RecipesListComponent,
        RecipesComponent,
    ],

    imports: [
        CommonModule,
        ReactiveFormsModule,
        RecipesRoutingMudule,
        SharedModule]
})


export class RecipesModule {

}
