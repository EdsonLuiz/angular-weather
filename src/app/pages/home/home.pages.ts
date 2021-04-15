import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { select, Store } from '@ngrx/store';

import * as fromHomeActions from './state/home.actions';
import * as fromHomeSelectors from './state/home.selectors';

@Component({
  selector: 'jv-home',
  templateUrl: './home.pages.html',
  styleUrls: ['./home.pages.scss']
})
export class HomePages implements OnInit {

  searchControl: FormControl;

  text: string;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.searchControl = new FormControl('', Validators.required);
  }

  doSearch() {
    const text = this.searchControl.value;
  }
}
