import { ShoppingListRouteModule } from './shopping-list-route.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [ShoppingEditComponent,
        ShoppingListComponent],

    imports: [
        CommonModule,
        ShoppingListRouteModule,
        FormsModule]
})
export class ShoppingListModule {

}
