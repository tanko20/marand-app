import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DoctorService } from "../service/doctor.service";

import { Doctor } from "../doctor"

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(
  	private route: ActivatedRoute,
  	private doctorService: DoctorService,
  	private location: Location
  	) { }

  doctor: Doctor;

  goBack(): void {
  	this.location.back();
  }

  getDoctorById(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.doctorService.getDoctorById(id)
    .subscribe(doctor => this.doctor = doctor);
}

  ngOnInit() {
  	this.getDoctorById();
  }

}
