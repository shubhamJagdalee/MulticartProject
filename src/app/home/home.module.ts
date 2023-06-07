import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClothingComponent } from './clothing/clothing.component';
import { VegetablesComponent } from './vegetables/vegetables.component';



@NgModule({
  declarations: [
    ClothingComponent,
    VegetablesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
