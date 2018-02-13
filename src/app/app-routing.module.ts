import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DoctorComponent } from "./doctor/doctor.component";
import { DetailsComponent } from "./details/details.component";



export const routes: Routes = [
	{path: "", redirectTo: "doctors", pathMatch: "full"},
	{path: "doctors", component: DoctorComponent },
	{path: "doctors/:id", component: DetailsComponent }
];


@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
