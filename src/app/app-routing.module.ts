import { BookmarksPages } from './pages/bookmarks/bookmarks.pages';
import { HomePages } from './pages/home/home.pages';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: HomePages},
  {path: 'bookmarks', component: BookmarksPages}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
