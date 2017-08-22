import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './directive/dropdown.directive';
import { NgModule } from '@angular/core';

@NgModule({
declarations: [

    DropdownDirective],

    imports: [CommonModule],

    exports: [
        CommonModule,
        DropdownDirective]
})
export class SharedModule {

}
