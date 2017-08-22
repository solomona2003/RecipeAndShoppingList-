import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthRouteModule } from './auth-route.module';

import { NgModule } from '@angular/core';

@NgModule({
    declarations: [SignInComponent, SignUpComponent],

    imports: [CommonModule,
        AuthRouteModule,
        FormsModule]

})
export class AuthModule {

}
