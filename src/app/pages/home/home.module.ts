import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePages } from './home.pages';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomePages],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
