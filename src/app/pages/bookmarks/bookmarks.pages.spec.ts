import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarksPages } from './bookmarks.pages';

describe('BookmarksPages', () => {
  let component: BookmarksPages;
  let fixture: ComponentFixture<BookmarksPages>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarksPages ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarksPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
