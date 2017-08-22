import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const shoppingListRoutes: Routes = [
    // shopping-list
    {
        path: '', component: ShoppingListComponent, children: [
            { path: ':shopping-edit', component: ShoppingEditComponent }
        ] },

];

@NgModule({

    imports: [RouterModule.forChild(shoppingListRoutes)],
    exports: [RouterModule]


})
export class ShoppingListRouteModule {

}
