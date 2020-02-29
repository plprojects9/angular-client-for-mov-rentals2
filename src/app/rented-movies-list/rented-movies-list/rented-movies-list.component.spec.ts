import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentedMoviesListComponent } from './rented-movies-list.component';
import { MovieService } from 'src/app/services/movie.service';
import { from, Observable } from 'rxjs';
import 'rxjs/add/observable/from';
import { RentedMoviesView } from 'src/app/models/rented-movies-view';

describe('RentedMoviesListComponent', () => {
  let component: RentedMoviesListComponent;
  let fixture: ComponentFixture<RentedMoviesListComponent>;
  let service: MovieService;
  let rentMovViewList: RentedMoviesView[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentedMoviesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentedMoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // beforeEach ( () => {
  //   service = new MovieService(null);
  //   component = new RentedMoviesListComponent(service);
  //   rentMovViewList = [{custid:1, fname:"John", lname:"Taggart", rentedmoviename:"Black Swan"}];
  // });

  // it('should set rentedMovieListProperty with the items returned from server ', () => {
    
    
  //   spyOn(service, 'findAll').and.callFake( () => {
  //     //return Observable.from([rentMovViewList]);
  //     return from([rentMovViewList]);
  //   })

  //   component.ngOnInit();

  //   expect(component.rentedMoviesList.length).toBe(1);
  // });

});
