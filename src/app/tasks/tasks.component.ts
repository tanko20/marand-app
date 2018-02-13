import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DoctorService } from "../service/doctor.service";

import { Tasks } from "../tasks"

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(
  	private doctorService: DoctorService,
  	private route: ActivatedRoute
  ) { }

  tasks: Tasks[];



  getTasksById(): void {
 		const id = +this.route.snapshot.paramMap.get('id');
  	this.doctorService.getTasksById(id)
  		.subscribe(tasks => this.tasks = tasks);
  }
  


  ngOnInit() {
  	 this.getTasksById();
  }

}
