// import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';  // for header which is in app.component
// import { RecipesModule } from './recipes/recipes.module'; //no more eager loading
import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { DataStorageService } from './shared/service/data-storage.service';
import { RecipeService } from './recipes/service/recipe.service';
import { ShoppingListService } from './shopping-list/service/shopping-list.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AppRouteModule } from './routing/app-route.module';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRouteModule,
    HttpModule,
   // RecipesModule, lazy loaded
    AuthModule, // couldnt make it lazy load
    SharedModule,
    // ShoppingListModule
  ],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
