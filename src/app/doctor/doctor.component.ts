import { Component, OnInit } from '@angular/core';

import { DoctorService } from "../service/doctor.service";

import { Doctor } from "../doctor";

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  constructor(private doctorService: DoctorService) { }
	

  doctors: Doctor[];

  getDoctors(): void {
    this.doctorService.getDoctors()
      .subscribe(doctors => this.doctors = doctors);
  }



  ngOnInit() {
    this.getDoctors();
  }

}
