import { Component, OnInit } from '@angular/core';
import { RentedMoviesView } from 'src/app/models/rented-movies-view';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-rented-movies-list',
  templateUrl: './rented-movies-list.component.html',
  styleUrls: ['./rented-movies-list.component.css']
})
export class RentedMoviesListComponent implements OnInit {

  rentedMoviesList: RentedMoviesView[];
  
  constructor(private movieService: MovieService) { 
  }

  ngOnInit(): void {
    this.movieService.findAll().subscribe(data => {
      this.rentedMoviesList = data;
    });
  }

}
