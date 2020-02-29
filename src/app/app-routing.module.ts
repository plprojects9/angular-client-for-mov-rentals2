import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentedMoviesListComponent } from './rented-movies-list/rented-movies-list/rented-movies-list.component';


const routes: Routes = [
  { path: 'rented_movies', component: RentedMoviesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
