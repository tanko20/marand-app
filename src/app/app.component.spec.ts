import {Location} from "@angular/common";
import {TestBed, fakeAsync, tick, async} from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";

import { AppComponent } from "./app.component";
import { DoctorComponent } from "./doctor/doctor.component";
import { DetailsComponent } from "./details/details.component";
import { TasksComponent } from "./tasks/tasks.component";
import { AppRoutingModule, routes } from "./app-routing.module";


class MockRouter {
    navigateByUrl(url: string) { 
      return url; 
    }
}

describe('Router: App', () => {

  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [ 
        AppComponent,
        DoctorComponent,
        DetailsComponent,
        TasksComponent
      ]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent); 
    router.initialNavigation();    
  });

  it('fakeAsync works', fakeAsync(() => {
    let promise = new Promise((resolve) => {
      setTimeout(resolve, 10)
    });
    let done = false;
    promise.then(() => done = true);
    tick(50);
    expect(done).toBeTruthy();
  }));


  it('if empty "", then redirect to /doctors', fakeAsync(() => { 
    router.navigate['/doctors']; //this
    tick(50); 
    expect(location.path()) //or this doesn't work
      .toBe('/doctors'); 
  }));


  it('navigate to "doctors" takes you to /doctors', fakeAsync(() => {
    router.navigate(['/doctors']);
    tick(50);
    expect(location.path()).toBe('/doctors');
  }));

});

