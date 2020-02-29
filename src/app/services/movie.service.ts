import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentedMoviesView } from '../models/rented-movies-view';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private rentedMoviesUrl: string;
  
  constructor(private httpClient: HttpClient) { 
    this.rentedMoviesUrl = 'http://localhost:8080/movierentals2/rented_movies';
  }

  public findAll(): Observable<RentedMoviesView[]> {
    return this.httpClient.get<RentedMoviesView[]>(this.rentedMoviesUrl);
  }
}
