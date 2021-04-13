import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePages } from './home.pages';

describe('HomePages', () => {
  let component: HomePages;
  let fixture: ComponentFixture<HomePages>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePages ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
