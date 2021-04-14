import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import { HomePages } from './home.pages';
import { HomeReducer } from './state/home.reducer';



@NgModule({
  declarations: [HomePages],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('home', HomeReducer)
  ]
})
export class HomeModule { }
