import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './auth-guard.service';
import { SignInComponent } from './sign-in/sign-in.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';


const authRoutes: Routes = [
    { path: 'signIn', component: SignInComponent },
    { path: 'signUp', component: SignUpComponent }

];

@NgModule({
    imports: [
        RouterModule.forChild(authRoutes)
    ],

exports: [RouterModule]
})

export class AuthRouteModule {

}
