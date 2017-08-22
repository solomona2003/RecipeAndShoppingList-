import { HomeComponent } from './../home/home.component';
import { AuthGuard } from './../auth/auth-guard.service';


import { ShoppingEditComponent } from '../shopping-list/shopping-edit/shopping-edit.component';

import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { AppComponent } from '../app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


const appRoutes: Routes = [

       {path: '', component: HomeComponent},
       {path: 'recipes', loadChildren: '../recipes/recipes.module#RecipesModule'}, // lazy loading
       {path: 'shopping-list', loadChildren: '../shopping-list/shopping-list.module#ShoppingListModule' }, // lazy loading

 ];

@NgModule ({
        imports: [RouterModule.forRoot(appRoutes)],
        exports: [RouterModule]
    })

export class AppRouteModule {

}
