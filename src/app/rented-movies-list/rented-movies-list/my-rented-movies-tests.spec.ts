import { MovieService } from "src/app/services/movie.service";
import { RentedMoviesListComponent } from './rented-movies-list.component';
import { RentedMoviesView } from 'src/app/models/rented-movies-view';
import { from } from 'rxjs';

describe('RentedMoviesListComponent', () => {
    let service: MovieService;
    let component: RentedMoviesListComponent;
    let rentMovViewList: RentedMoviesView[];
    
    beforeEach ( () => {
        service = new MovieService(null);
        component = new RentedMoviesListComponent(service);
        rentMovViewList = [{custid:1, fname:"John", lname:"Taggart", rentedmoviename:"Black Swan"}];
    });

    it('should set rentedMovieList Property with the items returned from server ', () => {
        
        spyOn(service, 'findAll').and.callFake( () => {
            //return Observable.from([rentMovViewList]);
            return from([rentMovViewList]);
        })

        component.ngOnInit();

        expect(component.rentedMoviesList.length).toBe(1);
    });
});