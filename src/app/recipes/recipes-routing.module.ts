import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { AuthGuard } from './../auth/auth-guard.service';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesLandComponent } from './recipes-land/recipes-land.component';
import { RecipesComponent } from './recipes.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// routes not router
const recipesRoutes: Routes = [

    // recipes
    // { path: '', redirectTo: '/recipes', pathMatch: 'full' },



         {path: '', component: RecipesComponent, children: [ // '' here since recipes is already used at app routing
            { path: '', component: RecipesLandComponent },
            { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] }, // for add new Recipe button
            { path: ':id', component: RecipesDetailComponent },
            // for editing existing recipe on edit recipe button on recipe details
            { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] }

        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(recipesRoutes)
    ],

    exports: [
        RouterModule

    ]
})
export class RecipesRoutingMudule {

}
