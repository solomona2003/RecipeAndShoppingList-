import { HomeComponent } from '.././core/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules} from '@angular/router';


const appRoutes: Routes = [

       {path: '', component: HomeComponent},
       {path: 'recipes', loadChildren: '../recipes/recipes.module#RecipesModule'}, // lazy loading
       {path: 'shopping-list', loadChildren: '../shopping-list/shopping-list.module#ShoppingListModule' }, // lazy loading

 ];

@NgModule ({
        imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
        exports: [RouterModule]
    })

export class AppRouteModule {

}
