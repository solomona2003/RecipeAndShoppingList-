import { ShoppingListService } from './../shopping-list/service/shopping-list.service';
import { RecipeService } from './../recipes/service/recipe.service';
import { DataStorageService } from './../shared/service/data-storage.service';
import { AuthService } from './../auth/auth.service';
import { AppRouteModule } from './../Routing/app-route.module';
import { SharedModule } from './../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent],

        imports: [SharedModule,
        AppRouteModule],

        exports: [AppRouteModule,
        HeaderComponent],

        providers: [ShoppingListService,
            RecipeService,
            DataStorageService,
            AuthService,
            ]

})
export class CoreModule {

}
