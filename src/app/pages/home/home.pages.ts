import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'jv-home',
  templateUrl: './home.pages.html',
  styleUrls: ['./home.pages.scss']
})
export class HomePages implements OnInit {

  searchControl: FormControl

  constructor() { }

  ngOnInit(): void {
    this.searchControl = new FormControl('', Validators.required)
  }

  doSearch() {
    console.log(this.searchControl.value)
  }

}
